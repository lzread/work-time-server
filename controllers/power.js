const PowerModel = require('../modules/power')

class PowerController {



    /**
     * 获取当前菜单节点权限列表
     * @param {Number} menu_id 菜单ID
     */
    static async getPowers(ctx) {

        const menu_id = ctx.params.menu_id;
        try {
            const data = await PowerModel.getPowers(menu_id);

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


    static async getAssignPowers(ctx) {


        const { menu_id, role_id } = ctx.request.query;

        console.log(ctx.request.query)

        try {
            const data = await PowerModel.getAssignPowers(menu_id, role_id);

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
     * 新建权限
     */
    static async addPower(ctx) {
        const req = ctx.request.body;
        try {
            const data = await PowerModel.addPower(req);
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

    /**
     * 更新权限
     */
    static async updatePower(ctx) {
        const req = ctx.request.body;
        try {
            const data = await PowerModel.updatePower(req);
            if (data[0] == 1) {
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '更新成功',
                }
            } else {
                ctx.response.status = 200;
                ctx.body = {
                    code: 412,
                    msg: '更新失败',
                }
            }

        } catch (err) {
            ctx.response.status = 416;
            ctx.body = {
                code: 416,
                msg: '更新失败',
            }
        }
    }

    /**
     * 删除权限
     */
    static async deletePower(ctx) {
        const id = ctx.params.id;
        try {
            const data = await PowerModel.deletePower(id);
            if (data == 1) {
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '删除成功',
                }
            } else {
                ctx.response.status = 200;
                ctx.body = {
                    code: 412,
                    msg: '删除失败',
                }
            }

        } catch (err) {
            ctx.response.status = 416;
            ctx.body = {
                code: 416,
                msg: '删除失败',
            }
        }
    }

}


module.exports = PowerController