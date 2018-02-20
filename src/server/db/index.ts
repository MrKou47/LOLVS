import mongoose from 'mongoose';

const db = mongoose.createConnection('mongodb://localhost/test');

export default db;
