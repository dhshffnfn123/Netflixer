import Router from 'koa-router';
import videos from './videos';

const api = new Router();

api.use('/videos', videos.routes());

export default api;
