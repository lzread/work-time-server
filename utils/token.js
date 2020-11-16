const jwt = require('jsonwebtoken')

const secret = "token";

//判断token是否应该更新有效期（续期）
const getTokenRenewStatus = () => {

    //检测当前token是否到达续期时间段
    let obj = parseToken()
    if (!obj.email) {
        return false
    }
    //更新时间段在过期前3天
    if (obj.exp - new Date().getTime() / 1000 > 60 * 60 * 24 * 3) {
        return false
    } else {
        return true
    }

}

//获取一个期限为7天的token
const getToken = (payload = {}) => {
    return jwt.sign(payload, secret, { expiresIn: 60 * 60 * 24 * 7 })
}

//重新生成一个期限为7天的token
const createNewToken = (token) => {

    let obj = jwt.verify(token, secret)
    let payload = {
        id: obj.id,
        username: obj.username
    }
    return getToken(payload)

}

//解析token为对象
const parseToken = (token) => {
    try {
        return jwt.verify(token, secret)
    } catch {
        console.log('token is expired')
        return {}
    }

}

module.exports = {
    secret,
    getTokenRenewStatus,
    getToken,
    createNewToken,
    parseToken
}