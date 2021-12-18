const Router = require('koa-router');
const videos = new Router();

const printInfo = ctx => {
    ctx.body = {
        method: ctx.method,
        path: ctx.path,
        params: ctx.params,
    };
};

videos.get('/', printInfo);
videos.post('/', printInfo);
videos.get('/:id', printInfo);
videos.delete('/:id', printInfo);
videos.put('/:id', printInfo);
videos.patch('/:id', printInfo);
module.exports = videos;