import Router from 'koa-router';
import * as videosCtrl from './videos.ctrl';

const videos = new Router();

videos.get('/', videosCtrl.list);
videos.post('/', videosCtrl.write);

const video = new Router(); // /api/videos/:id
video.get('/', videosCtrl.checkObjectId, videosCtrl.read);
video.delete('/', videosCtrl.checkObjectId, videosCtrl.remove);
video.patch('/', videosCtrl.checkObjectId, videosCtrl.update);

videos.use('/:id', videosCtrl.checkObjectId, video.routes());

export default videos;
