const Koa = require('koa');
const app = new Koa();
const jwtKoa = require('koa-jwt');
const router = require('./router');
const bodyParser = require('koa-bodyparser');
const config = require('./config');
const mongoose = require('mongoose');
mongoose.connect(`mongodb://${config.mongo.host}:${config.mongo.port}/${config.mongo.name}`, { useNewUrlParser: true });

app.use(bodyParser())

app
  .use(jwtKoa({secret: config.jwtKey}).unless({ path: [/^\/api\/user\/login/, /\//]}))
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(config.port);
console.log(config.host + ':' + config.port);

