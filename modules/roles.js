/**
├── modules
    └── roles.js
*/

// 引入刚刚在第五点建立连接mysql数据库的db.js文件
const db = require('../config/db');
// 引入Sequelize对象
const Sequelize = db.sequelize;
// 引入Sequelize操作符
const Op = db.Op;
// 引入上一步的用户数据表模型文件
const Roles = Sequelize.import('../schema/roles');
const RolesMenus = Sequelize.import('../schema/roles_menus');

// 自动创建表
Roles.sync({ force: false });


Roles.belongsTo(RolesMenus, { foreignKey: 'ID', targetKey: 'RoleId' });


class RolesModel {



    static async getRoles() {
        return await Roles.findAll()
    }


    static async addRole(data) {
        return await Roles.create(data)
    }

    static async updateRole(data) {
        const { id } = data;
        return await Roles.update(
            {
                where: {
                    id
                }
            })
    }

    static async deleteRole(data) {
        const { id } = data;
        return await Roles.destroy({
            where: {
                id
            }
        })
    }

}

module.exports = RolesModel