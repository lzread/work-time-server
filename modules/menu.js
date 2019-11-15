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
        return await Menu.findAll();
    }

    /**
     * 根据当前登录的用户ID获取菜单
     * 左侧导航菜单数据来源
     * @param {*} id 用户ID
     */
    static async getMenusByUserId(id) {
        const sql = `SELECT DISTINCT t5.id, t5.menu_name, t5.route_name, t5.icon, t5.hidden, t5.parent_id, (SELECT GROUP_CONCAT(tt2.role_name) FROM role_menu tt1 LEFT JOIN role tt2 ON tt2.id = tt1.role_id WHERE tt1.menu_id = t5.id) AS roles, (SELECT GROUP_CONCAT(power_name) FROM power WHERE menu_id = t5.id)  AS perm FROM USER t1 LEFT JOIN user_role t2 ON t1.id = t2.user_id LEFT JOIN role t3 ON t2.role_id = t3.id LEFT JOIN role_menu t4 ON t3.id = t4.role_id LEFT JOIN menu t5 ON t4.menu_id = t5.id WHERE t1.id = ${id}`;
        return await Sequelize.query(sql, {
            type: Sequelize.QueryTypes.SELECT
        });
    }

    /**
     * 根据角色ID获取当前角色已分配的菜单
     * @param {*} id 角色ID
     */
    static async getMenusByRoleId(id){
        return await Sequelize.query(`SELECT t2.id FROM role_menu t1 LEFT JOIN menu t2 ON t1.menu_id = t2.id WHERE t1.role_id = ${id}`, {
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