const db = require('../config/db');
const Sequelize = db.sequelize;
const Op = db.Op;
const Menu = Sequelize.import('../schema/menu');
Menu.sync({ force: false });

class MenuModel {

    /**
     * 查询菜单列表
     */
    static async getMenus() {
        return await Sequelize.query('SELECT t1.id, t1.menu_name AS name, t1.route_name AS title, t1.icon, t1.hidden, t1.parent_id, (SELECT GROUP_CONCAT(t3.role_name) FROM role_menu t2 LEFT JOIN role t3 ON t3.id=t2.role_id WHERE t2.menu_id=t1.id) AS role FROM menu t1', {
            type: Sequelize.QueryTypes.SELECT
        });
    }

    /**
     * 新建菜单
     * @param {*} data 菜单数据模型
     */
    static async addMenu(data) {
        return await Menu.create(data)
    }

    /**
     * 更新菜单
     * @param {*} data 菜单数据模型
     */
    static async updateMenu(data) {
        const { id } = data;
        
        return await Menu.update(data,
            {
                where: {
                    id
                }
            })
    }

    /**
     * 删除菜单
     * @param {*} id 菜单ID
     */
    static async deleteMenu(id) {

        return await Menu.destroy({
            where: {
                id
            }
        })
    }


}

module.exports = MenuModel