/**
├── modules
    └── role_menu.js
*/

// 引入刚刚在第五点建立连接mysql数据库的db.js文件
const db = require('../config/db');
// 引入Sequelize对象
const Sequelize = db.sequelize;
// 引入Sequelize操作符
const Op = db.Op;
// 引入上一步的用户数据表模型文件
const RoleMenu = Sequelize.import('../schema/role_menu');



// 自动创建表
RoleMenu.sync({ force: false });







class RoleMenuModel {


    /**
     * 根据角色ID查询关联的菜单ID列表
     * @param {int} role_id 角色ID
     */
    static async getRoleIdByMenuId(role_id) {
        return await RoleMenu.findAll({
            where: {
                role_id
            }
        });
    }

    /**
     * 新建 '角色' 关联 '菜单'
     * @param {*} data 角色ID, 菜单ID
     */
    static async addRoleMenu(data) {
        return await RoleMenu.bulkCreate(data)
    }

    /**
     * 根据角色ID删除
     * @param {int} role_id 角色ID
     */
    static async deleteRoleMenu(role_id) {
        return await RoleMenu.destroy({
            where: {
                role_id
            }
        })
    }



}

module.exports = RoleMenuModel