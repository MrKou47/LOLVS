import { Router } from 'express';
import db from '../db';

import videosApi from './videos';

const v1Router = Router();

v1Router.use('/v1/test', async (req, res, next) => {
  const videos = db.collection('videos');
  const searchRes = await videos.aggregate([
    { $match: { aid: +req.query.aid }},
  ]).toArray();
  res.send(searchRes);
});

v1Router.use('/v1/video', videosApi);

// v1Router.use('/v1/crawl', searchApi);

export { v1Router };
