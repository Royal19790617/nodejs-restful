'use strict';

const Koa = require('koa');

const bodyParser = require('koa-bodyparser');

const app = new Koa();

// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

// parse request body:
app.use(bodyParser());

const router = require('./router');
router(app);

app.listen(3000);
console.log('app started at port 3000...');
