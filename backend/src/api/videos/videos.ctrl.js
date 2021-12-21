import Video from '../../models/video';
import mongoose from 'mongoose';

const { ObjectId } = mongoose.Types;

export const getVideoById = async (ctx, next) => {
  const { id } = ctx.params;
  if (!ObjectId.isValid(id)) {
    ctx.status = 400;
    return;
  }
  try {
    const video = await Video.findById(id);
    if (!video) {
      ctx.status = 404;
      return;
    }
    ctx.state.video = video;
    return next();
  } catch (e) {
    ctx.throw(500, e);
  }
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
    user: ctx.state.user,
  });
  try {
    await video.save();
    ctx.body = video;
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
  const { tag } = ctx.query;
  const query = {
    ...(tag ? { tags: tag } : {}),
  };

  try {
    const videos = await Video.find(query)
      .sort({ _id: -1 })
      .limit(10)
      .skip((page - 1) * 10)
      .lean()
      .exec();
    const videoCount = await Video.countDocuments(query).exec();
    ctx.set('Last-Page', Math.ceil(videoCount / 10));
    ctx.body = videos.map((video) => ({
      ...video,
      summary:
        video.summary.length < 200
          ? video.summary
          : `${video.summary.slice(0, 200)}...`,
    }));
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const read = async (ctx) => {
  ctx.body = ctx.state.video;
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

export const checkOwnVideo = (ctx, next) => {
  const { video } = ctx.state;
  if (video.user.username !== 'velopert') {
    ctx.status = 403;
    return;
  }
  return next();
};
