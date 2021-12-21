import Router from 'koa-router';
import videos from './videos';
import reviews from './reviews';
import auth from './auth';

const api = new Router();

api.use('/videos', videos.routes());
api.use('/reviews', reviews.routes());
api.use('/auth', auth.routes());

export default api;
