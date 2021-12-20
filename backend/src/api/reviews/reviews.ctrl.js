import Review from '../../models/review';

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
