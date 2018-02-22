import { Router } from 'express';
import db, { videos } from '../../db';

import genMsg from '../utils/gen-msg';

const api = Router();

interface ISearchVideoResp {
  videos: any[];
}

/**
 * 指定搜索
 * aid
 * keywords: 关键词
 */
api.get('/search', async (req, res, next) => {
  const { query } = req;
  const { aid, keywords } = query;
  let result = {};
  if (!Object.keys(query).length) return res.send(genMsg({ msg: '需要搜索条件' }));
  if (aid) {
    result = await videos.find({ aid: +aid }).toArray();
  }
  if (keywords) {
    result = await videos.find({ 'pagelist.part': { $regex: new RegExp(query.keywords)}}).toArray();
  }

  res.send(
    genMsg<ISearchVideoResp>({ data: { videos: result } })
  );
});

export default api;
