import client from './client';

export const writeReview = ({ text, videoId }) =>
  client.post('/api/reviews', { text, videoId });
export const readVideo = (id) => client.get(`/api/reviews/${id}`);
