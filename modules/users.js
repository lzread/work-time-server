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
const Jobs = Sequelize.import('../schema/jobs');

Users.belongsTo(Departments, { foreignKey: 'departmentId', targetKey: 'id' });
Users.belongsTo(Jobs, { foreignKey: 'jobId', targetKey: 'id' });
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

    /**
     * 编辑用户
     * @param {*} data 
     */
    static async edit(data) {
        return await Users.update(
            {
                data,
            },
            {
                where: {
                    id
                },
            })
    }


    static async login(username, password) {
        return await Users.findOne({
            attributes: ['id'],
            where: {
                username,
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
                departmentId: id,
            },
        })
    }



    static async getList(departmentId, page, limit) {



        page = page == undefined ? 1 : page;
        limit = limit == undefined ? 10 : limit;

        const users = await Users.findAndCountAll({
            include: [Departments, Jobs],
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
}

module.exports = UsersModel