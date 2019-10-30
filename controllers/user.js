const UserModel = require('../modules/user')
const jwt = require('jsonwebtoken')

class userController {


    static async login(ctx) {
        const req = ctx.request.body;
        try {
            const info = await UserModel.login(req.username, req.password);
            if (info) {

                const token = jwt.sign({ username: req.username, password: req.password }, 'token', {
                    expiresIn: 60 * 60 * 1  // 1小时过期
                });

                const data = {};
                data.id = info.id;
                data.token = token;

                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    message: '登录成功',
                    data
                }
            } else {
                ctx.response.status = 200;
                ctx.body = {
                    code: 412,
                    message: '用户名或密码错误',
                    data
                }
            }
        } catch (err) {
            ctx.response.status = 416;
            ctx.body = {
                code: 416,
                message: '登录失败',
            }
        }

    }


    static async getInfo(ctx) {
        const id = ctx.params.id;
        const info = await UserModel.getInfo(id);
        info.role = info.role ? info.role.split(",") : info.role;
        const data = info;
        ctx.body = {
            code: 200,
            message: '查询成功',
            data,
        }
    }


}
module.exports = userController