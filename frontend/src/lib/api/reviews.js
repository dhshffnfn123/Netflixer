import client from './client';

export const writeReview = ({ text }) => client.post('/api/reviews', { text });
export const readVideo = (id) => client.get(`/api/reviews/${id}`);
