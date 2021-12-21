import Router from 'koa-router';
import * as reviewsCtrl from './reviews.ctrl';

const reviews = new Router();

reviews.post('/', reviewsCtrl.write);
reviews.get('/', reviewsCtrl.list);
reviews.delete('/:id', reviewsCtrl.checkObjectId, reviewsCtrl.remove);

export default reviews;
