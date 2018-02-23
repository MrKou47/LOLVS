import { Router } from 'express';
import { HeroesModels } from '../../db';
import genMsg from '../utils/gen-msg';

import { IHeroShortcutAddReq, IHeroShortcutAddRes } from 'interface/api/heroes';
import { HeroSchema } from 'server/db/schema/heroes-schema';

const shortcutRouter = Router();

shortcutRouter.post('/add', async (req, res, next) => {
  const body = req.body as IHeroShortcutAddReq;
  const { id, shortcuts } = body;
  const newHero = await HeroesModels
    .findByIdAndUpdate(
      id,
      { $addToSet: { shortcuts: { $each: shortcuts } } },
      { new: true }
    )
    .exec();
  res.send(
    genMsg({ data: HeroesModels })
  );
});

// TODO: 删除英雄简称
shortcutRouter.post('/delete', (req, res, next) => {
  res.send(genMsg());
});

export default shortcutRouter;
