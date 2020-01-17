const db = require('../config/db');
const Sequelize = db.sequelize;
const Op = db.Op;
const Menu = Sequelize.import('../schema/menu');
Menu.sync({ force: false });

class MenuModel {

    /**
     * 获取菜单列表
     * 包含操作权限、角色
     */
    static async getMenus() {
        return await Sequelize.query(`SELECT t1.* , ( SELECT GROUP_CONCAT(t3.role_code) FROM role_menu t2 LEFT JOIN role t3 ON t3.id = t2.role_id WHERE t2.menu_id = t1.id ) AS roles FROM menu t1 ORDER BY t1.sort DESC`, {
            type: Sequelize.QueryTypes.SELECT
        });
    }






}

module.exports = MenuModel