import { Router } from 'express';
import { VideoModels } from '../../db';

import genMsg from '../utils/gen-msg';

import { ISearchVideoReq, ISearchVideoRes } from 'interface/api/videos';

const videosApi = Router();

/**
 * 指定搜索
 * aid
 * keywords: 关键词
 */
videosApi.get('/search', async (req, res, next) => {
  const { aid, keyword } = req.query as ISearchVideoReq;
  let result;
  if (!aid && !keyword) return res.send(genMsg({ msg: '需要搜索条件' }));
  if (aid) {
    result = await VideoModels.find({ aid: +aid }).exec();
  }
  if (keyword) {
    result = await VideoModels.find({ 'pagelist.part': { $regex: new RegExp(keyword)}}).exec();
  }

  res.send(
    genMsg<ISearchVideoRes>({ data: { videos: result } })
  );
});

export default videosApi;
