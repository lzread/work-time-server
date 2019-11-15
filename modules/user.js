/**
├── modules
    └── user.js
*/

const db = require('../config/db');
// 引入Sequelize对象
const Sequelize = db.sequelize;
// 引入上一步的用户数据表模型文件
const User = Sequelize.import('../schema/user');

// 自动创建表
User.sync({ force: false });

class UserModel {


    /**
     * 登录
     * @param {string} username 用户名
     * @param {string} password 密码
     */
    static async login(username, password) {
        return await User.findOne({
            attributes: ['id'],
            where: {
                username,
                password
            },
        })
    }

    /**
     * 查询用户详细信息 包含角色信息
     * @param {int} id 用户ID
     */
    static async getInfo(id) {
        return await Sequelize.query(`SELECT t1.ID, t1.username,(SELECT GROUP_CONCAT(t3.role_name) FROM user_role t2 LEFT JOIN role t3 ON t3.id = t2.role_id WHERE t2.user_id = t1.id) AS roles,(SELECT GROUP_CONCAT(t3.id)	FROM user_role t2 LEFT JOIN role t3 ON t3.id = t2.role_id WHERE t2.user_id = t1.id) AS role_ids FROM USER t1 WHERE t1.id = ${id}`, {
            // 如果plain为true,则sequelize将仅返回结果集的第一条记录. 
            // 如果是false,它将返回所有记录.
            plain: true,
            // 你正在执行的查询类型. 查询类型会影响结果在传回之前的格式.
            type: Sequelize.QueryTypes.SELECT
        });
    }


    /**
     * 查询用户列表 包含角色信息
     */
    static async getUsers() {
        return await Sequelize.query(`SELECT  t1.ID,t1.username,t1.realname,t1.email,t1.phone,t1.avatar,t1.introduction,t1.status,(SELECT GROUP_CONCAT(t3.role_name) FROM user_role t2 LEFT JOIN role t3 ON t3.id=t2.role_id WHERE t2.user_id=t1.id) AS roles FROM user t1`, {
            plain: false,
            type: Sequelize.QueryTypes.SELECT
        });
    }

    /**
     * 新建用户
     * @param {*} data 用户数据模型
     */
    static async addUser(data) {
        return await Users.create(data)
    }

    /**
     * 更新用户
     * @param {*} data 用户数据模型
     */
    static async updateUser(data) {
        const { id } = data;
        return await Users.update(
            {
                where: {
                    id
                }
            })
    }

    /**
     * 删除用户
     * @param {*} id 用户ID
     */
    static async deleteUser(id) {
        return await Users.destroy({
            where: {
                id
            }
        })
    }






}

module.exports = UserModel