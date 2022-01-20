import Review from '../../models/review';
import mongoose from 'mongoose';

const { ObjectId } = mongoose.Types;

export const getReviewById = async (ctx, next) => {
  const { id } = ctx.params;
  if (!ObjectId.isValid(id)) {
    ctx.status = 400;
    return;
  }
  try {
    const review = await Review.findById(id);
    if (!review) {
      ctx.status = 404;
      return;
    }
    ctx.state.review = review;
    return next();
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const write = async (ctx) => {
  const { text } = ctx.request.body;
  const { videoId } = ctx.params;
  const review = new Review({
    videoId,
    text,
    user: ctx.state.user,
  });
  try {
    await review.save();
    ctx.body = review;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const list = async (ctx) => {
  const page = parseInt(ctx.query.page || '1', 10);

  if (page < 1) {
    ctx.status = 400;
    return;
  }
  try {
    const reviews = await Review.find()
      .sort({ _id: -1 })
      .limit(20)
      .skip((page - 1) * 10)
      .lean()
      .exec();
    const reviewCount = await Review.countDocuments().exec();
    ctx.set('Last-Page', Math.ceil(reviewCount / 10));
    ctx.body = reviews.map((review) => ({
      ...review,
      text:
        review.text.length < 200
          ? review.text
          : `${review.text.slice(0, 200)}...`,
    }));
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const remove = async (ctx) => {
  const { id } = ctx.params;
  try {
    await Review.findByIdAndRemove(id).exec();
    ctx.status = 204;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const checkOwnVideo = (ctx, next) => {
  const { user, video } = ctx.state;
  if (video.user.username !== user._id) {
    ctx.status = 403;
    return;
  }
  return next();
};
