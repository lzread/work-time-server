const UserModel = require('../modules/user')
const jwt = require('jsonwebtoken')

class userController {


    static async login(ctx) {
        const req = ctx.request.body;
        try {



            let privateKey = 'worktime';
            let token = jwt.sign({ username: req.username }, privateKey, {
                expiresIn: 60 * 60 * 1  // 1小时过期
            });

            const loginInfo = await UserModel.login(req.username, req.password);

            const data = Object.assign(JSON.parse(JSON.stringify(loginInfo)), { token: token });


            if (data) {
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
        info.role = info.role.split(",")
        const data = info;
        ctx.body = {
            code: 200,
            message: '查询成功',
            data,
        }
    }


}
module.exports = userController