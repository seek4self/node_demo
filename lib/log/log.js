/*
 * @Author: mazhuang
 * @Date: 2019-06-12 10:00:50
 * @LastEditTime: 2019-06-12 10:15:37
 * @Description: 日志管理
 */

'use strict';

const log4js = require('log4js');
const config = require('../../node_modules/config');

log4js.configure({
    //日志输出
    appenders:{
        //根据时间保存文件位置，文件自动创建
        demo:{
            type: "dateFile",
            //文件名为= filename + pattern, 设置为alwaysIncludePattern：true
            filename: config.get('log.name'),
            pattern: '.yyyy-MM-dd',
            //包含模型
            alwaysIncludePattern: true,
            // 以.log结尾
            keepFileExt: true,
        },
        out:{
            type: "stdout"
        }
        
    },
    categories:{
        default: { 
            appenders: ['demo'], 
            level: config.get('log.level')
        },
        console: {
            appenders: ['demo', 'out'], 
            level: config.get('log.level')
        }
    }
});

module.exports = log4js;
// test
// const logger1 = log4js.getLogger('all');
// logger.info('this is datefile');
// logger.trace('Entering cheese testing');
// logger.debug('Got cheese.');
// logger.info('Cheese is Comté.');
// logger.warn('Cheese is quite smelly.');
// logger.error('Cheese is too ripe!');
// logger.fatal('Cheese was breeding ground for listeria.');

// logger1.warn('Cheese is quite smelly.');