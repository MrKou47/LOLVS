import { Router } from 'express';

import genMsg from '../utils/gen-msg';
import { heros } from '../../db';

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
