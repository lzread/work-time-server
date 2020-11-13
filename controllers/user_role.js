const UserRoleModel = require('../modules/user_role')
class UserRoleController {
    static async addUserRole(ctx) {
        const req = ctx.request.body;
        try {
            const data = await UserRoleModel.addUserRole(req);
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
    static async deleteUserRole(ctx) {
        const req = ctx.request.body;
        try {
            const data = await UserRoleModel.deleteUserRole(req.user_id, req.role_id);
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



}
module.exports = UserRoleController