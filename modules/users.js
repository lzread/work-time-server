/**
├── modules
    └── users.js
*/

const db = require('../config/db');
// 引入Sequelize对象
const Sequelize = db.sequelize;
// 引入上一步的用户数据表模型文件
const Users = Sequelize.import('../schema/users');
const Departments = Sequelize.import('../schema/departments');
const Roles = Sequelize.import('../schema/roles');
const UsersRoles = Sequelize.import('../schema/users_roles');
const RolesMenus = Sequelize.import('../schema/roles_menus');
const Menus = Sequelize.import('../schema/menus');



Users.belongsTo(UsersRoles, { foreignKey: 'ID', targetKey: 'UserId' });

// 自动创建表
Users.sync({ force: false });

class UsersModel {



    static async login(UserName, UserPass) {
        return await Users.findOne({
            attributes: ['id'],
            where: {
                UserName,
                UserPass
            },
        })
    }

    static async getInfo(id) {

        return await Users.findOne({
            where: {
                id,
            },
        })
    }


    static async getUsersByDepartmentID(departmentId, page, limit) {

        page = page == undefined ? 1 : page;
        limit = limit == undefined ? 10 : limit;

        const users = await Users.findAndCountAll({
            where: {
                departmentId,
            },
            limit: limit,
            offset: limit * (page - 1),
            raw: true
        })

        return {
            total: users.count,
            rows: users.rows
        };


    }


    static async addUser(data) {
        return await Users.create(data)
    }


    static async updateUser(data) {
        const { id } = data;
        return await Users.update(
            {
                where: {
                    id
                },
            })
    }


    static async deleteUser(data) {
        const { id } = data;
        return await Users.destroy({
            where: {
                id,
            },
        })
    }



    static async deleteUsersByDepartmentID(data) {
        const { departmentId } = data;
        return await Users.destroy({
            where: {
                departmentId
            },
        })
    }
}

module.exports = UsersModel