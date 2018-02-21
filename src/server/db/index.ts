import mongoose from 'mongoose';

const db = mongoose.createConnection('mongodb://localhost/test');

db.on('error', console.error.bind(console, '连接错误:'));

export default db;
