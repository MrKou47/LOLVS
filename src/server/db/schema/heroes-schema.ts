import * as mongoose from 'mongoose';

const Types = mongoose.Types;

export const HeroSchema = new mongoose.Schema({
  name: String,
  shortcuts: [String],
});
