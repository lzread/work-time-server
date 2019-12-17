const UserRoleModel = require('../modules/user_role')
class UserRoleController {
    static async addUserRole(ctx) {
        const req = ctx.request.body;
        try {
            const data = await UserRoleModel.addUserRole(req);
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
    static async deleteUserRole(ctx) {
        const user_id = ctx.params.user_id;
        try {
            const data = await UserRoleModel.deleteUserRole(user_id);
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                msg: '操作成功',
                data
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
module.exports = UserRoleController