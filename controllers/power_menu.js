const PowerMenuModel = require('../modules/power_menu')

class PowerMenuController {

    /**
     * 根据角色ID查询关联的菜单ID列表
     */
    static async getPowerIdByMenuId(ctx) {
        const power_id = ctx.params.power_id;
        try {
            const data = await PowerMenuModel.getPowerIdByMenuId(power_id);
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
    static async addPowerMenu(ctx) {
        const req = ctx.request.body;
        const power_id = ctx.params.power_id;
        try {
            if (power_id) {
                //先删在创建，防止数据重复
                PowerMenuModel.deletePowerMenu(power_id);
                
                const data = await PowerMenuModel.addPowerMenu(req);
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
module.exports = PowerMenuController