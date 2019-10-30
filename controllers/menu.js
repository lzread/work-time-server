const MenuModel = require('../modules/menu')
class MenuController {

    static async routes(ctx) {
        const data = await MenuModel.routes();
        ctx.body = {
            code: 200,
            message: '查询成功',
            data,
        }
    }

}
module.exports = MenuController