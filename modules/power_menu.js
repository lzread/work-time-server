/**
├── modules
    └── power_menu.js
*/

// 引入刚刚在第五点建立连接mysql数据库的db.js文件
const db = require('../config/db');
// 引入Sequelize对象
const Sequelize = db.sequelize;
// 引入Sequelize操作符
const Op = db.Op;
// 引入上一步的用户数据表模型文件
const PowerMenu = Sequelize.import('../schema/power_menu');



// 自动创建表
PowerMenu.sync({ force: false });







class PowerMenuModel {


    /**
     * 根据角色ID查询关联的菜单ID列表
     * @param {int} role_id 角色ID
     */
    static async getRoleIdByMenuId(role_id) {
        return await PowerMenu.findAll({
            where: {
                role_id
            }
        });
    }

    /**
     * 新建 '角色' 关联 '菜单'
     * @param {*} data 角色ID, 菜单ID
     */
    static async addPowerMenu(data) {
        return await PowerMenu.bulkCreate(data)
    }

    /**
     * 根据角色ID删除
     * @param {int} role_id 角色ID
     */
    static async deletePowerMenu(role_id) {
        return await PowerMenu.destroy({
            where: {
                role_id
            }
        })
    }



}

module.exports = PowerMenuModel