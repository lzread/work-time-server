const UserModel = require('../modules/user')
const jwt = require('jsonwebtoken')
const _config_ = require('../config');
const util = require('../utils');
class userController {


    static async login(ctx) {
        const req = ctx.request.body;


        try {
            const query = await UserModel.login(req.username, req.password);
            const data = {};

            if (query) {

                //访问接口使用的token
                // const token = jwt.sign({ username: query.username, id: query.id }, _config_.SECRET, {
                //     expiresIn: 60 * 60 * 0.01 // 1小时过期
                // });

                const token = util.getToken({ username: query.username, id: query.id });



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
                message: '用户信息查询失败',
            }
        }



    }

    static async getUsers(ctx) {
        const {
            page,
            limit
        } = ctx.query;
        try {
            const data = await UserModel.getUsers(parseInt(page), parseInt(limit));
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                message: '查询成功',
                data: data.rows,
                total: data.total
            }
        } catch (error) {
            ctx.response.status = 416;
            ctx.body = {
                code: 416,
                message: 'getUsers查询失败',
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
                message: 'getUserByRoleId查询失败',
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
                message: '创建成功',
                data
            }
        } catch (error) {
            ctx.response.status = 416;
            ctx.body = {
                code: 416,
                message: '创建失败',
            }
        }
    }

    static async updateUser(ctx) {
        const request = ctx.request.body;
        console.log(request)
        try {
            const data = await UserModel.updateUser(request);
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                message: '成功',
                data
            }
        } catch (err) {
            ctx.response.status = 416;
            ctx.body = {
                code: 416,
                message: '失败',
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
                    message: '删除成功',
                }
            } else {
                ctx.response.status = 200;
                ctx.body = {
                    code: 412,
                    message: '删除失败',
                }
            }
        } catch (err) {
            ctx.response.status = 416;
            ctx.body = {
                code: 416,
                message: '删除失败',
            }
        }
    }



}
module.exports = userController