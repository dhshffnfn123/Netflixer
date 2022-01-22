import client from './client';

export const writeReview = ({ text, video }) =>
  client.post('/api/reviews', { text, video });
export const readVideo = (id) => client.get(`/api/reviews/${id}`);
