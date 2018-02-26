import { VideoModels } from './db';

async function find() {
  const keyword = "盖伦";
  const result = await
    VideoModels
    .aggregate([
      {$match: {'pagelist.part': {$regex: new RegExp(keyword)}}},
      {$project: {
        items: {
          $filter: {
            cond: { $regex: new RegExp(keyword)},
            input: '$items.pagelist.part',
          }
        }
      }}
    ]).exec();
  console.log(result);
}

find();
