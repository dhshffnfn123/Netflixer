import Review from '../../models/review';
import mongoose from 'mongoose';
import Joi from 'joi';

const { ObjectId } = mongoose.Types;

export const checkObjectId = (ctx, next) => {
  const schema = Joi.object().keys({
    videoId: Joi.number().required(),
    text: Joi.string().required(),
  });

  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const { id } = ctx.params;
  if (!ObjectId.isValid(id)) {
    ctx.status = 400;
    return;
  }
  return next();
};

export const write = async (ctx) => {
  const { videoId, text } = ctx.request.body;
  const review = new Review({
    videoId,
    text,
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
