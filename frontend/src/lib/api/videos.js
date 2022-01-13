import client from './client';
export const readVideo = (id) => client.get(`/api/videos/${id}`);
