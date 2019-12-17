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
                query.role_ids = query.role_ids ? query.role_ids.split(",") : [];
                const data = query;
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    message: '查询成功',
                    data
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

    static async getUsers(ctx) {
        try {
            const data = await UserModel.getUsers();
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                message: '查询成功',
                data,
            }
        } catch (error) {
            ctx.response.status = 416;
            ctx.body = {
                code: 416,
                msg: '查询失败',
            }
        }
    }

    static async getUserByRoleId(ctx) {
        const role_id = ctx.params.role_id;
        try {
            const data = await UserModel.getUserByRoleId(role_id);
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                message: '查询成功',
                data
            }
        } catch (error) {
            ctx.response.status = 416;
            ctx.body = {
                code: 416,
                msg: '查询失败',
            }
        }



    }



    static async addUser(ctx) {
        const req = ctx.request.body;
        try {
            const data = await UserModel.addUser(req);
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                msg: '创建成功',
                data
            }
        } catch (error) {
            ctx.response.status = 416;
            ctx.body = {
                code: 416,
                msg: '创建失败',
            }
        }
    }

    static async updateUser(ctx) {
        const req = ctx.request.body;
        try {
            const data = await UserModel.updateUser(req);
            if (data[0] == 1) {
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '更新成功',
                }
            } else {
                ctx.response.status = 200;
                ctx.body = {
                    code: 412,
                    msg: '更新失败',
                }
            }

        } catch (err) {
            ctx.response.status = 416;
            ctx.body = {
                code: 416,
                msg: '更新失败',
            }
        }
    }

    static async deleteUser(ctx) {
        const id = ctx.params.id;
        //删除用户与角色关联
        await UserRoleModel.deleteUserRoleByUserId(id);
        try {
            const data = await UserModel.deleteUser(id);
            if (data == 1) {
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '删除成功',
                }
            } else {
                ctx.response.status = 200;
                ctx.body = {
                    code: 412,
                    msg: '删除失败',
                }
            }
        } catch (err) {
            ctx.response.status = 416;
            ctx.body = {
                code: 416,
                msg: '删除失败',
            }
        }
    }



}
module.exports = userController