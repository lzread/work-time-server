const RolePowerModel = require('../modules/role_power')

class RolePowerController {


    static async addRolePower(ctx) {

        const { menu_id } = ctx.params;

        const req = ctx.request.body;

        if (menu_id) {

            try {

                await RolePowerModel.deleteRolePower(menu_id);

                const data = await RolePowerModel.addRolePower(req);

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
module.exports = RolePowerController