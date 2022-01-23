import client from './client';
import qs from 'qs';

export const writeReview = ({ text, videoId }) =>
  client.post('/api/reviews', { text, videoId });
export const listReviews = ({ videoId }) => {
  const queryString = qs.stringify({
    videoId,
  });
  return client.get(`/api/reviews?${queryString}`);
};
