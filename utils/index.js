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
        return jwt.sign(payload, _config_.SECRET, { expiresIn: 60 * 60 * 24 * 7 })
    },
    /**
     * 生成文件名称
     */
    getUploadDirName() {
        const date = new Date();
        let month = Number.parseInt(date.getMonth()) + 1;
        month = month.toString().length > 1 ? month : `0${month}`;
        const dir = `${date.getFullYear()}${month}${date.getDate()}${date.getTime()}`;
        return dir;
    },
    /**
     * 获取文件后缀
     * @param {*} name 
     */
    getUploadFileExt(name) {
        let ext = name.split('.');
        return ext[ext.length - 1];
    }

};

