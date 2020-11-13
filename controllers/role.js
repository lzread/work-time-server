const RoleModel = require('../modules/role')
const UserRoleModel = require('../modules/user_role');
class RoleController {


    static async getRoles(ctx) {
        const { page, limit } = ctx.query;
        try {
            const data = await RoleModel.getRoles(parseInt(page), parseInt(limit));
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
                message: '查询失败',
            }
        }
    }


    static async getRoleNameExist(ctx) {
        const { role_code } = ctx.params;
        try {
            const data = await RoleModel.getRoleNameExist(role_code);
            if (data) {
                ctx.response.status = 200;
                ctx.body = {
                    code: 412,
                    message: '角色代码重复',
                }
            } else {
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    message: '角色代码可以使用',
                }
            }
        } catch (error) {
            ctx.response.status = 416;
            ctx.body = {
                code: 416,
                message: '查询失败',
            }
        }
    }



    static async addRole(ctx) {
        const req = ctx.request.body;
        try {
            const data = await RoleModel.addRole(req);
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                message: '操作成功',
                data
            }
        } catch (error) {
            ctx.response.status = 416;
            ctx.body = {
                code: 416,
                message: '操作失败',
            }
        }
    }

    static async updateRole(ctx) {
        const req = ctx.request.body;
        try {
            const data = await RoleModel.updateRole(req);
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                message: '操作成功',
                data
            }
        } catch (err) {
            ctx.response.status = 416;
            ctx.body = {
                code: 416,
                message: '操作失败',
            }
        }
    }


    static async deleteRole(ctx) {
        const { id } = ctx.params;
        //删除用户与角色关联
        await UserRoleModel.deleteUserRoleByRoleId(id);
        try {
            const data = await RoleModel.deleteRole(id);
            if (data == 1) {
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    message: '操作成功',
                }
            } else {
                ctx.response.status = 200;
                ctx.body = {
                    code: 412,
                    message: '操作失败',
                }
            }

        } catch (err) {
            ctx.response.status = 416;
            ctx.body = {
                code: 416,
                message: '操作失败',
            }
        }
    }

}
module.exports = RoleController