import mongoose from 'mongoose';

const { Schema } = mongoose;

const VideoSchema = new Schema({
  title: String,
  release: String,
  age: String,
  runtime: String,
  characters: [String],
  director: String,
  summary: String,
  tags: [String],
});
