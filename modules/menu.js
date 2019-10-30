const db = require('../config/db');
const Sequelize = db.sequelize;
const Op = db.Op;
const Menu = Sequelize.import('../schema/menu');
Menu.sync({ force: false });

class MenuModel {

    static async routes() {
        return await Sequelize.query('SELECT t1.id,t1.menu_name AS name,(SELECT GROUP_CONCAT(t3.role_name) FROM role_menu t2 LEFT JOIN role t3 ON t3.id=t2.role_id WHERE t2.menu_id=t1.id) AS role FROM menu t1', {
            type: Sequelize.QueryTypes.SELECT
        });
    }

}

module.exports = MenuModel