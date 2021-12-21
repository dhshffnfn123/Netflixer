import mongoose, { mongo } from 'mongoose';

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
  user: {
    _id: mongoose.Types.ObjectId,
    username: String,
  },
});

const Video = mongoose.model('Video', VideoSchema);
export default Video;
