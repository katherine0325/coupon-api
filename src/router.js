const Router = require('koa-router');
const router = new Router();
const { Res } = require('./lib/common');
const index = require('./controller/index');
const user = require('./controller/user');
const list = require('./controller/list');

router.get('/', Res(index.index));

router.post('/api/user/login', Res(user.login));

router.get('/api/list/list', Res(list.getList));
router.post('/api/list/create', Res(list.createList));
router.get('/api/list/createEmpty', Res(list.createEmptyData));

module.exports = router;
