import Router from 'koa-router';
import videos from './videos';
import reviews from './reviews';

const api = new Router();

api.use('/videos', videos.routes());
api.use('/reviews', reviews.routes());

export default api;
