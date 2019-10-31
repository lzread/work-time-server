const UserModel = require('../modules/user')
const jwt = require('jsonwebtoken')

class userController {


    static async login(ctx) {
        const req = ctx.request.body;
        try {
            const query = await UserModel.login(req.username, req.password);
            const data = {};
            if (query) {
                const token = jwt.sign({ username: req.username, password: req.password }, 'token', {
                    expiresIn: 60 * 60 * 1  // 1小时过期
                });
                data.id = query.id;
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
        } catch (error) {
            ctx.response.status = 416;
            ctx.body = {
                code: 416,
                message: '登录失败',
            }
        }
    }


    static async getInfo(ctx) {
        const id = ctx.params.id;
        try {
            const query = await UserModel.getInfo(id);
            if (query) {
                query.roles = query.roles ? query.roles.split(",") : [];
                const data = query;
                console.log(data);
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    message: '查询成功',
                    data,
                }
            } else {
                ctx.response.status = 200;
                ctx.body = {
                    code: 412,
                    message: '无数据',
                }
            }
        } catch (error) {
            ctx.response.status = 416;
            ctx.body = {
                code: 416,
                msg: '查询失败',
            }
        }



    }


}
module.exports = userController