import Review from '../../models/review';
import mongoose from 'mongoose';
import Joi from '../../../node_modules/joi/lib/index';

const { ObjectId } = mongoose.Types;

export const checkObjectId = (ctx, next) => {
  const schema = Joi.Object().keys({
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
  try {
    const reviews = await Review.find().exec();
    ctx.body = reviews;
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
