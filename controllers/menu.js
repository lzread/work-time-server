const MenuModel = require('../modules/menu')
class MenuController {

    static async getAllMenus(ctx) {

        try {
            const data = await MenuModel.getAllMenus();
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

    static async getMenus(ctx) {
        const { user_id } = ctx.params;
        try {
            const data = await MenuModel.getMenus(user_id);
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





}
module.exports = MenuController