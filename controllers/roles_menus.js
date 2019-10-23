/**
├── controllers
    └── roles_menus.js
*/
const RolesMenusModel = require('../modules/roles_menus')

const Utils = require('../utils')

class RolesPowersController {

    static async getMenus(ctx) {


        const data = await RolesMenusModel.getMenus();
    


        ctx.body = {
            code: 200,
            message: '查询成功',
            data,
        }
    }

}
module.exports = RolesPowersController