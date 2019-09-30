/**
├── controllers
    └── users.js
*/
const UsersModel = require('../modules/users')
class usersController {
    /**
     * 创建用户
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async create(ctx) {
        // 接收客服端
        let req = ctx.request.body;
        if (req.name && reg.password) {
            try {
                // 创建用户模型
                const ret = await UsersModel.create(req);
                // 把刚刚新建的用户ID查询用户详情，且返回新创建的用户信息
                const data = await UsersModel.getInfo(ret.id);
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '创建用户成功',
                    data
                }

            } catch (err) {
                ctx.response.status = 412;
                ctx.body = {
                    code: 200,
                    msg: '创建用户失败',
                    data: err
                }
            }
        } else {
            ctx.response.status = 416;
            ctx.body = {
                code: 200,
                msg: '参数不齐全',
            }
        }

    }
    /**
     * 用户登录
     * @param {*} ctx 
     */
    static async login(ctx) {
        let req = ctx.request.body;

        if (req.username && req.password) {

            
            try {
                let data = await UsersModel.login(req.username, req.password);

                console.log(data);
                ctx.response.status = 200;

                ctx.body = {
                    code: 200,
                    msg: '登录成功',
                    data
                }

            } catch (err) {
                console.log(err);
                ctx.response.status = 412;
                ctx.body = {
                    code: 200,
                    msg: '登录失败',
                    data
                }
            }
        } else {
            ctx.response.status = 416;
            ctx.body = {
                code: 200,
                msg: '参数不齐全',
            }
        }

    }
    /**
     * 根据ID删除用户
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async delete(ctx) {
        let req = ctx.request.body;
        if (req.id) {
            await UsersModel.delete(req.id);
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                msg: '删除成功',
            }
        } else {
            ctx.response.status = 416;
            ctx.body = {
                code: 200,
                msg: '参数不齐全',
            }
        }
    }
    /**
     * 根据ID获取用户详情
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async getInfo(ctx) {
        let id = ctx.params.id;

        if (id) {
            try {
                // 查询用户详情模型
                let data = await UsersModel.getInfo(id);
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '查询成功',
                    data
                }

            } catch (err) {
                ctx.response.status = 412;
                ctx.body = {
                    code: 412,
                    msg: '查询失败',
                    data
                }
            }
        } else {
            ctx.response.status = 416;
            ctx.body = {
                code: 416,
                msg: '用户ID必须传'
            }
        }
    }
    /**
     * 根据部门ID删除用户
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async deleteByDepId(ctx) {
        let req = ctx.request.body;
        if (req.department_id) {
            await UsersModel.deleteByDepId(req.department_id);
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                msg: '删除成功',
            }
        } else {
            ctx.response.status = 416;
            ctx.body = {
                code: 200,
                msg: '参数不齐全',
            }
        }
    }
    /**
     * 根据部门ID获取用户列表
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async getList(ctx) {
        let id = ctx.params.id;
        const { page, limit } = ctx.query;

        if (id) {
            let data = await UsersModel.getList(id, parseInt(page), parseInt(limit));
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                msg: '查询成功',
                data: data.rows,
                total: data.total
            }
        } else {
            ctx.response.status = 416;
            ctx.body = {
                code: 416,
                msg: '部门ID必须传'
            }
        }

    }
}
module.exports = usersController