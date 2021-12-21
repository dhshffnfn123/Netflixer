import Router from 'koa-router';
import * as reviewsCtrl from './reviews.ctrl';
import checkLoggedIn from '../../lib/checkLoggedIn';

const reviews = new Router();

reviews.post('/', checkLoggedIn, reviewsCtrl.write);
reviews.get('/', reviewsCtrl.list);
reviews.delete(
  '/:id',
  checkLoggedIn,
  reviewsCtrl.getReviewById,
  reviewsCtrl.checkOwnVideo,
  reviewsCtrl.remove,
);

export default reviews;
