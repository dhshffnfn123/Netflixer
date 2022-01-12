import client from './client';

export const writeReview = ({ text }) => client.post('/api/reviews', { text });
