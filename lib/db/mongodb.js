/*
 * @Author: mazhuang
 * @Date: 2019-02-13 13:41:33
 * @LastEditTime: 2019-04-24 11:22:44
 * @Description: 数据库连接
 */
'use strict';

//加载mongoose模块，这个中间件是nodejs与mongoDB数据库的桥梁
const mongoose = require("mongoose");
const config = require('../../node_modules/config');
mongoose.Promise = global.Promise;
// remove node DeprecationWarning
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
// read profiles
const dbHost = config.get('mongodb.host');
const dbName = config.get('mongodb.name');
const options = {
    autoIndex: false, // Don't build indexes
    poolSize: 10, // 最多可保持10个socket连接
    reconnectTries: 20, //重新连接次数 默认为30
    reconnectInterval: 500, // Reconnect every 500ms 默认为1000
    bufferMaxEntries: 0 //链接错误时终止数据库操作
}
const dbURL = `mongodb://${dbHost}/${dbName}`;
mongoose.connect(dbURL, options);

module.exports = mongoose;