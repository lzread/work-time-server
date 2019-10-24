/**
├── controllers
    └── users.js
*/
const UsersModel = require('../modules/users')
const UsersRolesModel = require('../modules/users_roles')
const RolesMenusModel = require('../modules/roles_menus')

const Utils = require('../utils')

class usersController {
    /**
     * 创建用户
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async addUser(ctx) {
        // 接收客服端
        let req = ctx.request.body;
        if (req.name && reg.password) {
            try {
                // 创建用户模型
                const ret = await UsersModel.addUser(req);
                // 把刚刚新建的用户ID查询用户详情，且返回新创建的用户信息
                const data = await UsersModel.getInfo(ret.id);
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    message: '创建用户成功',
                    data
                }

            } catch (err) {
                ctx.response.status = 412;
                ctx.body = {
                    code: 200,
                    message: '创建用户失败',
                    data: err
                }
            }
        } else {
            ctx.response.status = 416;
            ctx.body = {
                code: 200,
                message: '参数不齐全',
            }
        }

    }
    /**
     * 用户登录
     * @param {*} ctx 
     */
    static async login(ctx) {
        const req = ctx.request.body;
        try {
            const data = await UsersModel.login(req.UserName, req.UserPass);
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
    /**
     * 根据ID删除用户
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async deleteUser(ctx) {
        let req = ctx.request.body;
        if (req.id) {
            await UsersModel.deleteUser(req.id);
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                message: '删除成功',
            }
        } else {
            ctx.response.status = 416;
            ctx.body = {
                code: 200,
                message: '参数不齐全',
            }
        }
    }

    static async getInfo(ctx) {

        const id = ctx.params.id;

        const data = await UsersModel.getInfo(id);

        ctx.body = {
            code: 200,
            message: '查询成功',
            data,
        }
    }



    static async deleteUsersByDepartmentID(ctx) {
        const req = ctx.request.body;
        const data = await UsersModel.deleteUsersByDepartmentID(req);
        ctx.response.status = 200;
        ctx.body = {
            code: 200,
            message: '删除成功',
            data
        }
    }


    /**
     * 根据部门ID获取用户列表
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async getUsersByDepartmentID(ctx) {
        const id = ctx.params.id;
        const { page, limit } = ctx.query;

        try {
            const data = await UsersModel.getUsersByDepartmentID(id, parseInt(page), parseInt(limit));
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                message: '查询成功',
                data: data.rows,
                total: data.total
            }
        } catch (err) {
            ctx.response.status = 416;
            ctx.body = {
                code: 416,
                message: '查询失败',
                data: err
            }
        }


    }
}
module.exports = usersController