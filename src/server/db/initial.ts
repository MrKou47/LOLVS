
import rp from 'request-promise';
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
  let page = 1;

  const getVideos = ({ pagesize = 100, page = 1, keyword: string = '', order = '', mid = 95295911 }) => rp(
    `${SPACE_URL}/ajax/member/getSubmitVideos?mid=${mid}&pagesize=${pagesize}&page=${page}&keyword=&order=pubdate`,
    { json: true }
  );

  async function receive(page: number) {
    const result: IgetSubmitVideos = await getVideos({ page });
    if (!result.status) throw new Error(result.data);
    videoList = videoList.concat(result.data.vlist);
    if (page < result.data.pages) {
      page++;
      videoList = videoList.concat(await receive(page));
    } else {
      return result.data.vlist;
    }
  }

  await receive(page);
  return videoList;
}

const addPage2Video = async () => {
  const allVideos = await receiveAllVideos();

  const receiveParts = (aid: number) => rp(
    `${API_URL}/x/player/pagelist?aid=${aid}&jsonp=jsonp`,
    { json: true }
  );

  return Promise.all(allVideos.map(async function (v) {
    const videoParts = await receiveParts(v.aid);
    return { ...v, pagelist: videoParts.data };
  }));
}

function initialDB() {
  db.once('open', async function () {
    const finalVideoList = await addPage2Video();
    console.log(finalVideoList);

    const VideoModel = db.model('Video', VideoSchema);
    finalVideoList.forEach(v => {
      var videoEntity: any = new VideoModel(v);
      videoEntity.save();
    })
  });
}

export default initialDB;
