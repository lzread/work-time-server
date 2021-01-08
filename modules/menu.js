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
        return await Sequelize.query(`SELECT t1.* , ( SELECT GROUP_CONCAT(t3.role_code) FROM role_menu t2 LEFT JOIN role t3 ON t3.id = t2.role_id WHERE t2.menu_id = t1.id ) AS roles FROM menu t1`, {
            type: Sequelize.QueryTypes.SELECT
        });
    }

    /**
     * 新建
     */
    static async add(data) {
        return await Menu.create(data)
    }
    /**
     * 编辑
     */
    static async edit(data) {
        const { id } = data;
        return await Menu.update(
            data,
            {
                where: {
                    id
                }
            })
    }
    /**
     * 删除
     */
    static async del(id) {
        return await Menu.destroy({
            where: {
                id
            }
        })
    }



}

module.exports = MenuModel