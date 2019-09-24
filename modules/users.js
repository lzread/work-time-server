/**
├── modules
    └── users.js
*/

// 引入刚刚在第五点建立连接mysql数据库的db.js文件
const db = require('../config/db');
// 引入Sequelize对象
const Sequelize = db.sequelize;
// 引入上一步的用户数据表模型文件
const Users = Sequelize.import('../schema/users');
// 自动创建表
Users.sync({ force: false });

class UsersModel {
    /**
     * 创建用户模型
     * @param data
     * @returns {Promise<*>}
     */
    static async createUsers(data) {
        return await Users.create(data)
    }


    static async userLogin(tel, password) {
        return await Users.findOne({
            attributes: ['id'],
            where: {
                tel,
                password
            },
        })
    }

    /**
     * 查询取用户详情数据
     * @param id  用户ID
     * @returns {Promise<Model>}
     */
    static async getUsersInfo(id) {
        return await Users.findOne({
            where: {
                id,
            },
        })
    }

    static async getUsersListByDepartmentId(department_id, page, limit) {


        const users = await Users.findAndCountAll({
            where: {
                department_id,
            },
            limit: limit,
            offset: limit * (page - 1)
        })

        return {
            total: users.count,
            rows: users.rows
        };


    }
} 

module.exports = UsersModel