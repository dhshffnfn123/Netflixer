import mongoose from 'mongoose';

const { Schema } = mongoose;

const ReviewSchema = new Schema({
  text: String,
  publishedDate: {
    type: Date,
    default: Date.now,
  },
  video: {
    _id: mongoose.Types.ObjectId,
    title: String,
  },
  user: {
    _id: mongoose.Types.ObjectId,
    username: String,
  },
});

const Review = mongoose.model('Review', ReviewSchema);
export default Review;
