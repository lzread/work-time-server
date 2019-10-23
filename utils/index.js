module.exports = {
    /**
     * 数组去重
     * @param {*} arr 
     */
    unique(arr) {
        return Array.from(new Set(arr))
    }
};

