const RoleModel = require('../modules/role')

class RoleController {


    static async getRoles(ctx) {
        try {
            const data = await RoleModel.getRoles();

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

    static async addRole(ctx) {
        const req = ctx.request.body;
        try {
            //判断当前角色名称是否存在
            const exist = await RoleModel.getRoleNameExist(req.role_code);
            console.log(exist);
            if (!exist) {
                const data = await RoleModel.addRole(req);
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '操作成功',
                    data
                }
            } else {
                ctx.response.status = 200;
                ctx.body = {
                    code: 412,
                    msg: '操作失败,当前角色名称已存在',
                }
            }

        } catch (error) {
            ctx.response.status = 416;
            ctx.body = {
                code: 416,
                msg: '操作失败',
            }
        }
    }

    static async updateRole(ctx) {
        const req = ctx.request.body;
        try {
            const data = await RoleModel.updateRole(req);
            if (data[0] == 1) {
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '操作成功',
                }
            } else {
                ctx.response.status = 200;
                ctx.body = {
                    code: 412,
                    msg: '操作失败',
                }
            }

        } catch (err) {
            ctx.response.status = 416;
            ctx.body = {
                code: 416,
                msg: '操作失败',
            }
        }
    }


    static async deleteRole(ctx) {
        const id = ctx.params.id;
        try {
            const data = await RoleModel.deleteRole(id);
            if (data == 1) {
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '操作成功',
                }
            } else {
                ctx.response.status = 200;
                ctx.body = {
                    code: 412,
                    msg: '操作失败',
                }
            }

        } catch (err) {
            ctx.response.status = 416;
            ctx.body = {
                code: 416,
                msg: '操作失败',
            }
        }
    }

}
module.exports = RoleController