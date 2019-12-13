const db = require('../config/db');
const Sequelize = db.sequelize;
const Op = db.Op;
const Menu = Sequelize.import('../schema/menu');
Menu.sync({ force: false });

class MenuModel {

    /**
     * 获取菜单列表
     * @param {Number} user_id 用户ID
     */
    static async getMenus(user_id) {
        return await Sequelize.query(`SELECT DISTINCT t5.* , ( SELECT GROUP_CONCAT(tt2.role_code) FROM role_menu tt1 LEFT JOIN role tt2 ON tt2.id = tt1.role_id WHERE tt1.menu_id = t5.id ) AS roles , ( SELECT GROUP_CONCAT(power_code) FROM power WHERE menu_id = t5.id ) AS powers FROM USER t1 LEFT JOIN user_role t2 ON t1.id = t2.user_id LEFT JOIN role t3 ON t2.role_id = t3.id AND t3.status = 0 LEFT JOIN role_menu t4 ON t3.id = t4.role_id LEFT JOIN menu t5 ON t4.menu_id = t5.id WHERE t1.id = ${user_id}`, {
            type: Sequelize.QueryTypes.SELECT
        });
    }

    /**
     * 获取所有菜单
     */
    static async getAllMenus() {
        return await Menu.findAll();
    }




}

module.exports = MenuModel