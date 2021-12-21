import mongoose from 'mongoose';

const { Schema } = mongoose;

const ReviewSchema = new Schema({
  videoId: Number,
  text: String,
  publishedDate: {
    type: Date,
    default: Date.now,
  },
  user: {
    _id: mongoose.Types.ObjectId,
    username: String,
  },
});

const Review = mongoose.model('Review', ReviewSchema);
export default Review;
