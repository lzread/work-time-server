const UserRoleModel = require('../modules/user_role')
class UserRoleController {
    static async addUserRole(ctx) {

        const { role_id } = ctx.params;

        const req = ctx.request.body;

        if (role_id) {

            try {

                await UserRoleModel.deleteUserRole(role_id);

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

        } else {
            ctx.response.status = 416;
            ctx.body = {
                code: 416,
                msg: '参数不能为空',
            }
        }


    }
}
module.exports = UserRoleController