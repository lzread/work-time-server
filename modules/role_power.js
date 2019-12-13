/**
├── modules
    └── role_power.js
*/

// 引入刚刚在第五点建立连接mysql数据库的db.js文件
const db = require('../config/db');
// 引入Sequelize对象
const Sequelize = db.sequelize;
// 引入Sequelize操作符
const Op = db.Op;
// 引入上一步的用户数据表模型文件
const RolePower = Sequelize.import('../schema/role_power');

// 自动创建表
RolePower.sync({ force: false });

class RolePowerModel {

    /**
     * 删除角色和权限关联
     * @param {Number} menu_id 菜单ID
     */
    static async deleteRolePower(menu_id) {
        return await Sequelize.query(`DELETE FROM role_power a WHERE EXISTS(SELECT 1 FROM power b WHERE a.power_id = b.id AND b.menu_id = ${menu_id})`);
    }

    /**
     * 增加角色和权限关联
     * @param {Object} data 
     */
    static async addRolePower(data) {
        return await RolePower.bulkCreate(data);
    }

}

module.exports = RolePowerModel