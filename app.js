/*
 * @Author: mazhuang
 * @Date: 2019-06-12 09:16:08
 * @LastEditTime: 2019-06-12 10:17:53
 * @Description: Express 应用对象（app）配置
 */
'use strict';
//加载express模块
const express = require("express");
//加载cookieParser模块，用于在登录成功后再req中写入cookie，然后就可以再刷新或请求页面时
const cookieParser = require('cookie-parser');
//加载bodyparser模块，用来解析前端post方式提交过来的数据
const bodyParser = require("body-parser");

const router = require('./routers/router');
const logger = require('./lib/log/log').getLogger('app'); 

//创建一个新的服务器，相当于httpcreateServer
const app = express();
// 解析 application/json 类型数据
app.use(bodyParser.json());
// 解析 application/x-www-form-urlencoded 类型数据
// app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());

app.use('/sss/api/demo', router);

//app.use里的函数是一个通用接口，所有的页面的刷新及请求都会执行这个函数
app.use( function(req, res, next) {
    res.status(404).json({
        code: '001',
        message: 'Not Found'
    });
    logger.error(`Url:${req.path} not found`);
});

// 错误处理器
app.use(function(err, req, res, next) {
    res.status(500).json({
        code: '001',
        message: 'Server internal error'
    });
    logger.error(err.message);
 });

module.exports = app;