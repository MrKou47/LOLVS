import db from './index';
import rp from 'request-promise';
import { SEARCH_URL } from '../config';

const videoCollection = db.collection('videos');

interface IcrawlVideos {
  aid: number,
  keywords: string;
}

const crawlVideos = async (options: IcrawlVideos) => {
  let videoResult;
  const existVideo = await videoCollection.find({ aid: options.aid }).count();
  if (existVideo) return 'video exist';
  try {
    videoResult = await rp(
      `${SEARCH_URL}/api/search?search_type=all&keyword=${options.aid}`,
      { json: true }
    );
    if (videoResult.result.video.length) {
      videoCollection.insert(videoResult.result.video[0]);
    } else {
      return `can\'t find video ${options.aid}`;
    }
  } catch (error) {
    return 'search error';
  }
  return videoResult;
}