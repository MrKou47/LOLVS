import mongoose from 'mongoose';

export const VideoSchema = new mongoose.Schema({
  aid: Number,
  author: String,
  comment: Number,
  copyright: String,
  created: Number,
  description: String,
  favorites: Number,
  hide_click: Boolean,
  length: String,
  mid: Number,
  pagelist: [],
  pic: String,
  play: String,
  review: Number,
  subtitle: String,
  title: String,
  typeid: Number,
  video_review: Number,
});
