import { Router } from 'express';
import { Types } from 'mongoose';
import { HeroesModels } from '../../db';
import genMsg from '../utils/gen-msg';

import { IHeroModel } from 'interface/models/heroes';

import shortcutRouter from './shortcut';

import {
  IHeroSearchReq,
  IHeroSearchRes,
  IHeroEditReq,
  IHeroEditRes,
} from 'interface/api/heroes';

const heroesRouter = Router();
const ObjectId = Types.ObjectId;

heroesRouter.get('/search', async (req, res, next) => {
  const query = req.query as IHeroSearchReq;
  let result = await HeroesModels.find({ name: query.keyword }).exec();
  if (!result.length) {
    const reg = new RegExp(query.keyword);
    result = await HeroesModels.find({ shortcuts: query.keyword }).exec();
  }
  res.send(
    genMsg<IHeroSearchRes>({ data: { heroes: result } })
  );
});

heroesRouter.post('/edit', async (req, res, next) => {
  const body = req.body as IHeroEditReq;
  const { id, name } = body;
  const newHero = await HeroesModels.findByIdAndUpdate(
    id,
    { name },
    { new: true }
  ).exec();
  res.send(
    genMsg({ data: newHero })
  );
});

heroesRouter.use('/shortcut', shortcutRouter);

export default heroesRouter;
