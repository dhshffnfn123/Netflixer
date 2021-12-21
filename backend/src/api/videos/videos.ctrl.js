import Video from '../../models/video';
import mongoose from 'mongoose';
import Joi from 'joi';

const { ObjectId } = mongoose.Types;

export const checkObjectId = (ctx, next) => {
  const schema = Joi.object().keys({
    title: Joi.string().required(),
    release: Joi.string().required(),
    age: Joi.string().required(),
    runtime: Joi.string().required(),
    characters: Joi.array().items(Joi.string()).required(),
    director: Joi.string().required(),
    summary: Joi.string().required(),
    tags: Joi.array().items(Joi.string()).required(),
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
  const { title, release, age, runtime, characters, director, summary, tags } =
    ctx.request.body;
  const video = new Video({
    title,
    release,
    age,
    runtime,
    characters,
    director,
    summary,
    tags,
  });
  try {
    await video.save();
    ctx.body = video;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const list = async (ctx) => {
  try {
    const videos = await Video.find().exec();
    ctx.body = videos;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const read = async (ctx) => {
  const { id } = ctx.params;
  try {
    const video = await Video.findById(id).exec();
    if (!video) {
      ctx.status = 404;
      return;
    }
    ctx.body = video;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const remove = async (ctx) => {
  const { id } = ctx.params;
  try {
    await Video.findByIdAndRemove(id).exec();
    ctx.status = 204;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const update = async (ctx) => {
  const { id } = ctx.params;
  try {
    const video = await Video.findByIdAndUpdate(id, ctx.request.body, {
      new: true,
    }).exec();
    if (!video) {
      ctx.status = 404;
      return;
    }
    ctx.body = video;
  } catch (e) {
    ctx.throw(500, e);
  }
};
