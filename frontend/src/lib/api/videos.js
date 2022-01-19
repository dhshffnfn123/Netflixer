import client from './client';
import qs from 'qs';

export const readVideo = (id) => client.get(`/api/videos/${id}`);
export const listVideo = (page, username, tag) => {
  const queryString = qs.stringify({
    page,
    username,
    tag,
  });
  return client.get(`/api/videos/${queryString}`);
};
