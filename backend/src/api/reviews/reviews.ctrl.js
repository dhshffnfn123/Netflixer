let reviewId = 1;

const reviews = [
  {
    id: 1,
    videoId: 1,
    text: 'test review body',
    createDate: 'date',
  },
];

export const write = (ctx) => {
  const { videoId, text, createDate } = ctx.request.body;
  reviewId += 1;
  const review = {
    id: reviewId,
    videoId,
    text,
    createDate,
  };
  reviews.push(review);
  ctx.body = review;
};
