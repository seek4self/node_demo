/*
 * @Author: mazhuang
 * @Description: Convert mongoose _id to id before sending response
 * @Date: 2019-04-22 15:36:50
 * @LastEditTime: 2019-04-22 16:27:00
 */

'use strict';

/**
 * Convert _id in the json object to id
 * @param {*} input a json object query from mongdb
 */
function transformId(input) {
    let json = JSON.parse(JSON.stringify(input));
    delete json._id;
    return json
}
/**
 * Convert _id in the array object to id
 * @param {*} input an array object query from mongodb 
 */
function transformArrayId(input) {
    let output = [];
    input.forEach(item => {
        output.push(transformId(item))
    });
    return output;
}

module.exports = {
    transformId,
    transformArrayId
}

