/*
 * @Author: mazhuang
 * @Date: 2019-06-12 09:26:21
 * @LastEditTime: 2019-06-12 10:24:43
 * @Description: 
 */
'use strict';

const router = require('express').Router();
const logger = require('../lib/log/log').getLogger('router');

router.get('/', (req, res, next) => {
    res.status(200).json({});
    logger.info('a test');
})

module.exports = router;