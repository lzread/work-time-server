const RoleMenuModel = require('../modules/role_menu')

class RoleMenuController {

    static async getRoleMenu(ctx) {
        const { role_id } = ctx.params;
        try {
            const data = await RoleMenuModel.getRoleMenu(role_id);

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
    static async addRoleMenuBatch(ctx) {
        const req = ctx.request.body;
        const { role_id } = ctx.params;
        try {
            await RoleMenuModel.deleteRoleMenuByRoleId(role_id);
            const data = await RoleMenuModel.addRoleMenuBatch(req);
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
    }

}
module.exports = RoleMenuController