/*
 * @Author: mazhuang
 * @Date: 2019-06-12 09:33:37
 * @LastEditTime: 2019-06-12 09:37:14
 * @Description: send request
 */

 'use strict';
 
 const request = require('request');

 request({
    url: url,
    method: "POST",
    json: true,
    headers: {
        "content-type": "application/json",
    },
    body: JSON.stringify(requestData)
}, function(error, response, body) {
    if (!error && response.statusCode == 200) {
    }
}); 
