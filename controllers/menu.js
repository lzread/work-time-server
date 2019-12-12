const MenuModel = require('../modules/menu')
class MenuController {

    static async getMenus(ctx) {
        const id = ctx.params.id;
        try {
            const data = await MenuModel.getMenus(id);
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