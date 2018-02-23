import * as mongoose from 'mongoose';
import { VideoSchema } from './schema/video-schema';
import { HeroSchema } from './schema/heroes-schema';

mongoose.connect('mongodb://localhost/test');
const db = mongoose.connection;

export const videos = db.collection('videos');
export const heroes = db.collection('heroes');

export const VideoModels = mongoose.model('videos', VideoSchema);
export const HeroesModels = mongoose.model('heroes', HeroSchema);

db.on('error', console.error.bind(console, '连接错误:'));

export default db;
