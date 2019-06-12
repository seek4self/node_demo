/*
 * @Author: mazhuang
 * @Date: 2019-02-18 18:30:43
 * @LastEditTime: 2019-04-01 15:31:30
 * @Description: redis连接
 */
'use strict';
const Redis = require('ioredis');
const config = require('../../node_modules/config');
// connect to redis
const client = new Redis(config.get('redis.host'));

module.exports = client;