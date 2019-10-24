/**
├── modules
    └── roles_menus.js
*/

// 引入刚刚在第五点建立连接mysql数据库的db.js文件
const db = require('../config/db');
// 引入Sequelize对象
const Sequelize = db.sequelize;
// 引入Sequelize操作符
const Op = db.Op;
// 引入上一步的用户数据表模型文件
const RolesMenus = Sequelize.import('../schema/roles_menus');

const Roles = Sequelize.import('../schema/roles');
const Menus = Sequelize.import('../schema/menus');

// 自动创建表
RolesMenus.sync({ force: false });

RolesMenus.belongsTo(Roles, { foreignKey: 'RoleId', targetKey: 'ID' });
RolesMenus.belongsTo(Menus, { foreignKey: 'MenuId', targetKey: 'ID' });





class RolesMenusModel {

    static async getMenus() {


        return await Sequelize.query('SELECT t1.ID,t1.MenuName AS name,(SELECT GROUP_CONCAT(t3.RoleName) FROM roles_menus t2 LEFT JOIN roles t3 ON t3.ID=t2.RoleId WHERE t2.MenuId=t1.ID) AS roles FROM menus t1', {
            type: Sequelize.QueryTypes.SELECT
        });
        
    }

}

module.exports = RolesMenusModel