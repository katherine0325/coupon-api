## 项目概述

本项目为wx coupon 提供后台api

关联使用的数据库是mongodb

## 环境准备

- 下载docker
- docker中安装mongo，并命名为mongodb
- 环境变量可以从.env文件准备变更


## 本地调试

- 下载代码到本地 git clone https://github.com/katherine0325/coupon-api.git
- 启动mongo：make run_mongo(in linux), docker start mongodb(in windows)
- 启动项目：make start(in linux), node src/server.js(in windows)。出现 http://localhost:3000 即启动成功


## api

- 登录
POST /api/user/login
header: {
    Authorization: Basic new Buffer(username:password).toString('base64')
}

- 获取清单数据
GET /api/list/list
header: {
    Authorization: Bearer + token
}

- 新增一条清单数据
POST /api/list/create
header: {
    Authorization: Bearer + token
},
body: {
    name: 'xxx',
    price: 0.00,
    url: 'http://www.xxx.com/xxx'
}


## 如何新增一个api

- src/router.js 新require一个文件，并且新增一个路由地址
- src/controller.js 新增一个controller文件，并模仿其他的controller.js 新增一个 class



参考：

- [How to use Makefile](https://baike.baidu.com/item/Makefile/4619787?fr=aladdin)