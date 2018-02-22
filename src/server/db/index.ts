import * as mongoose from 'mongoose';

const db = mongoose.createConnection('mongodb://localhost/test');

export const videos = db.collection('videos');
export const heros = db.collection('heros');

db.on('error', console.error.bind(console, '连接错误:'));

export default db;
