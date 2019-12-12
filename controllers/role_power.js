const RolePowerModel = require('../modules/role_power')

class RolePowerController {

    static async addRolePowerBatch(ctx) {
        const role_id = ctx.params.id;
        const powers = ctx.request.body;

        if (role_id) {

            

            let req = [];

            for (let x in powers) {

                await RolePowerModel.deleteRolePowerByRoleId(powers[x].id);

                req.push({
                    power_id: powers[x].id,
                    role_id
                });

            }

            console.log(req);

            try {
                const data = await RolePowerModel.addRolePowerBatch(req);
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