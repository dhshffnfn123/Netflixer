import Router from 'koa-router';
import * as videosCtrl from './videos.ctrl';

const videos = new Router();

videos.get('/', videosCtrl.list);
videos.post('/', videosCtrl.write);
videos.get('/:id', videosCtrl.checkObjectId, videosCtrl.read);
videos.delete('/:id', videosCtrl.checkObjectId, videosCtrl.remove);
videos.patch('/:id', videosCtrl.checkObjectId, videosCtrl.update);

export default videos;
