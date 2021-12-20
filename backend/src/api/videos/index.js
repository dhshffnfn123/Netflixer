import Router from 'koa-router';
import * as videosCtrl from './videos.ctrl';

const videos = new Router();

videos.get('/', videosCtrl.list);
videos.post('/', videosCtrl.write);
videos.get('/:id', videosCtrl.read);
videos.delete('/:id', videosCtrl.remove);
videos.put('/:id', videosCtrl.replace);
videos.patch('/:id', videosCtrl.update);

export default videos;
