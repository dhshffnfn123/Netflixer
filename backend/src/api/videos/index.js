const Router = require('koa-router');
const videosCtrl = require('./videos.ctrl');

const videos = new Router();

const printInfo = ctx => {
    ctx.body = {
        method: ctx.method,
        path: ctx.path,
        params: ctx.params,
    };
};

videos.get('/', videosCtrl.list);
videos.post('/', videosCtrl.write);
videos.get('/:id', videosCtrl.read);
videos.delete('/:id', videosCtrl.remove);
videos.put('/:id', videosCtrl.replace);
videos.patch('/:id', videosCtrl.update);
module.exports = videos;