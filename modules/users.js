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
    static async create(data) {
        return await Users.create(data)
    }


    static async login(tel, password) {
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
    static async getInfo(id) {
        return await Users.findOne({
            where: {
                id,
            },
        })
    }

    /**
     * 根据ID删除用户
     * @param id  用户ID
     * @returns {Promise<Model>}
     */
    static async delete(id) {
        return await Users.destroy({
            where: {
                id,
            },
        })
    }

    /**
     * 根据部门ID删除用户
     * @param id  部门ID
     * @returns {Promise<Model>}
     */
    static async deleteByDepId(id) {
        return await Users.destroy({
            where: {
                department_id: id,
            },
        })
    }



    static async getList(department_id, page, limit) {

        page = page == undefined ? 1 : page;
        limit = limit == undefined ? 10 : limit;

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