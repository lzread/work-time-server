/**
├── modules
    └── role.js
*/

// 引入刚刚在第五点建立连接mysql数据库的db.js文件
const db = require('../config/db');
// 引入Sequelize对象
const Sequelize = db.sequelize;
// 引入Sequelize操作符
const Op = db.Op;
// 引入上一步的用户数据表模型文件
const Role = Sequelize.import('../schema/role');

// 自动创建表
Role.sync({ force: false });


class RoleModel {

    /**
     * 查询角色列表
     */
    static async getRoles() {
        return await User.findAll();
    }

    /**
     * 新建角色
     * @param {*} data 角色数据模型
     */
    static async addRole(data) {
        return await Role.create(data)
    }

    /**
     * 更新角色
     * @param {*} data 角色数据模型
     */
    static async updateRole(data) {
        const { id } = data;
        return await Role.update(
            {
                where: {
                    id
                }
            })
    }

    /**
     * 删除角色
     * @param {*} id 角色ID
     */
    static async deleteRole(id) {
        return await Role.destroy({
            where: {
                id
            }
        })
    }




}

module.exports = RoleModel