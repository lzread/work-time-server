const _config_ = require('../config');
const jwt = require('jsonwebtoken');
module.exports = {
    /**
     * 数组去重
     * @param {*} arr 
     */
    unique(arr) {
        return Array.from(new Set(arr))
    },

    // 获取一个期限为7天的 token 60 * 60 * 24 * 7
    getToken(payload) {
        return jwt.sign(payload, _config_.SECRET, { expiresIn:  60 * 60 * 24 * 7})
    },

};

