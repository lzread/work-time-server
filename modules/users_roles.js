/**
├── modules
    └── users_roles.js
*/

// 引入刚刚在第五点建立连接mysql数据库的db.js文件
const db = require('../config/db');
// 引入Sequelize对象
const Sequelize = db.sequelize;
// 引入Sequelize操作符
const Op = db.Op;
// 引入上一步的用户数据表模型文件
const Users = Sequelize.import('../schema/users');
const Roles = Sequelize.import('../schema/roles');
const UsersRoles = Sequelize.import('../schema/users_roles');

// 自动创建表
UsersRoles.sync({ force: false });

UsersRoles.belongsTo(Users, { foreignKey: 'UserId', targetKey: 'ID' });
UsersRoles.belongsTo(Roles, { foreignKey: 'RoleId', targetKey: 'ID' });





class UsersRolesModel {
    /**
     * 根据用户ID查询所有关联的角色名称
     * @param {*} id 
     */
    static async getRolesByUserId(id) {
        return await UsersRoles.findAll({
            attributes: ['ID'],
            include: [
                {
                    model: Roles,
                    attributes: ['ID', 'RoleName'],
                }
            ],
            where: {
                UserId: id,
            },
        })
    }

}

module.exports = UsersRolesModel