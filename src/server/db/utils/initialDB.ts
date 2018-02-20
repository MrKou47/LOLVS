import http from 'http';
import rp from 'request-promise';
import db from '../index';
interface IgetSubmitVideos {
  status: boolean;
  data: string & {
    tlist: any[];
    vlist: any[];
    count: number;
    pages: number;
  };
}

db.on('error', console.error.bind(console, '连接错误:'));

const handleServe = (req: http.ServerRequest, res: http.ServerResponse) => {
  res.end('nnn');
}

const receiveAllVideos = async () => {
  let videoList: any[] = [];
  let page = 1;

  const rr = ({ pagesize = 100, page = 1, keyword: string = '', order = '', mid = 95295911 }) => rp(
    `https://space.bilibili.com/ajax/member/getSubmitVideos?mid=${mid}&pagesize=${pagesize}&page=${page}&keyword=&order=pubdate`,
    { json: true }
  );

  async function receive(page: number) {
    const result: IgetSubmitVideos = await rr({ page });
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
    `https://api.bilibili.com/x/player/pagelist?aid=${aid}&jsonp=jsonp`,
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
    var VideoSchema = new mongoose.Schema({
      aid: Number,
      author: String,
      comment: Number,
      copyright: String,
      created: Number,
      description: String,
      favorites: Number,
      hide_click: Boolean,
      length: String,
      mid: Number,
      pagelist: [],
      pic: String,
      play: String,
      review: Number,
      subtitle: String,
      title: String,
      typeid: Number,
      video_review: Number,
    });
    const VideoModel = db.model('Video', VideoSchema);
    finalVideoList.forEach(v => {
      var videoEntity: any = new VideoModel(v);
      videoEntity.save();
    })
  });
}

export default initialDB;
