
import * as rp from 'request-promise';
import db from './index';
import { VideoSchema } from './schema/video-schema';
import { SPACE_URL, API_URL } from '../config';

interface IgetSubmitVideos {
  status: boolean;
  data: string & {
    tlist: any[];
    vlist: any[];
    count: number;
    pages: number;
  };
}

const receiveAllVideos = async () => {
  let videoList: any[] = [];
  let pageNum = 1;

  const getVideos = ({ pagesize = 100, page = 1, keyword = '', order = 'pubdate', mid = 95295911 }) => rp(
    `${SPACE_URL}/ajax/member/getSubmitVideos?mid=${mid}&pagesize=${pagesize}&page=${page}&keyword=${keyword}&order=${order}`,
    { json: true },
  );

  async function receive(page: number) {
    const result: IgetSubmitVideos = await getVideos({ page });
    console.log(`finish get page ${page} videos`);
    if (!result.status) throw new Error(result.data);
    if (page < result.data.pages) {
      videoList = videoList.concat(result.data.vlist);
      pageNum++;
      return await receive(pageNum);
    } else {
      return videoList = videoList.concat(result.data.vlist);
    }
  }
  console.log(`start to get videos...`);
  await receive(pageNum);
  console.log(`finish get all videos.`);
  return videoList;
};

const addPage2Video = async () => {
  const allVideos = await receiveAllVideos();
  console.log('start to get sub video');
  const receiveParts = (aid: number) => rp(
    `${API_URL}/x/player/pagelist?aid=${aid}&jsonp=jsonp`,
    { json: true },
  );
  return Promise.all(allVideos.map(async v => {
    const videoParts = await receiveParts(v.aid);
    return { ...v, pic: `https:${v.pic}`, pagelist: videoParts.data };
  }));
};

function initialDB() {
  console.log('start initial videos');
  db.once('open', async () => {
    const finalVideoList = await addPage2Video();
    console.log('finish get videos and sub videos.');
    const VideoModel = db.model('Video', VideoSchema);
    finalVideoList.forEach((v) => {
      const videoEntity: any = new VideoModel(v);
      videoEntity.save();
    });

    console.log('initial videos database success!');
  });
}

initialDB();

export default initialDB;
