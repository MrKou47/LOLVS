import { Router } from 'express';
import db from '../db';

const api = Router();

/**
 * 指定搜索
 */
api.get('/video/search', (req, res, next) => {
  const { query } = req;
  if (!query.query) {
    res.send({ status: -1, data: '需要查询条件！' });
    return;
  }
  const result = db.collection('videos').find({'pagelist.part': {$regex: query.query}});
  res.send(result);
});

export default api;
