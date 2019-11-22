const UserRoleModel = require('../modules/user_role')
class UserRoleController {


    static async addUserRoleBatch(ctx) {
        const role_id = ctx.params.id;
        const users = ctx.request.body;

        if (role_id) {

            await UserRoleModel.deleteUserRole(role_id);

            let req = [];

            for (let x in users) {

                req.push({
                    user_id: users[x].id,
                    role_id
                });

            }

            try {
                const data = await UserRoleModel.addUserRoleBatch(req);
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '操作成功',
                    data
                }
            } catch (error) {
                ctx.response.status = 416;
                ctx.body = {
                    code: 416,
                    msg: '操作失败',
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