import { Router } from 'express';
import { HeroesModels, VideoModels } from '../db';

import videosApi from './videos';
import heroesApi from './heroes';

const v1Router = Router();

v1Router.use('/v1/test', async (req, res, next) => {
  const searchRes = await VideoModels.aggregate([
    { $match: { aid: +req.query.aid }},
  ]).exec();
  res.send(searchRes);
});

v1Router.use('/v1/video', videosApi);
v1Router.use('/v1/hero', heroesApi);

export { v1Router };
