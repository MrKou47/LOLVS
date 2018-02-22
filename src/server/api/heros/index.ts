import { Router } from 'express';

import { heros } from '../../db';
import genMsg from '../utils/gen-msg';

const herosRouter = Router();

// TODO: search hero
herosRouter.get('/search', (req, res, next) => {
  res.send('');
});

// TODO: add hero
herosRouter.post('/add', (req, res, next) => {
  res.send('');
});

// TODO: add hero's shortcut
herosRouter.post('/shortcut/add', (req, res, next) => {
  res.send('');
});
