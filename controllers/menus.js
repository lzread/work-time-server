/**
├── controllers
    └── menus.js
*/
const MenusModel = require('../modules/menus')
class MenusController {

    static async getMenusById(ctx) {
        const id = ctx.params.id;
        const data = await MenusModel.getMenusById(id);
        ctx.response.status = 200;
        ctx.body = {
            code: 200,
            message: '查询成功',
            data
        }
    }

}
module.exports = MenusController