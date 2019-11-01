const RoleMenuModel = require('../modules/role_menu')

class RoleMenuController {

    /**
     * 根据角色ID查询关联的菜单ID列表
     */
    static async getRoleIdByMenuId(ctx) {
        const role_id = ctx.params.role_id;
        try {
            const data = await RoleMenuModel.getRoleIdByMenuId(role_id);
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

    /**
     * 新建 '角色' 关联 '菜单'
     */
    static async addRoleMenu(ctx) {
        const req = ctx.request.body;
        const role_id = ctx.params.role_id;
        try {
            if (role_id) {
                //先删在创建，防止数据重复
                RoleMenuModel.deleteRoleMenu(role_id);
                
                const data = await RoleMenuModel.addRoleMenu(req);
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '创建成功',
                    data
                }
            } else {
                ctx.response.status = 200;
                ctx.body = {
                    code: 412,
                    msg: '创建失败',
                }
            }

        } catch (error) {
            ctx.response.status = 416;
            ctx.body = {
                code: 416,
                msg: '创建失败',
            }
        }
    }

}
module.exports = RoleMenuController