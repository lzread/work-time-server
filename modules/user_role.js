const db = require('../config/db');
const Sequelize = db.sequelize;
const Op = db.Op;
const UserRole = Sequelize.import('../schema/user_role');
UserRole.sync({ force: false });

class UserRoleModel {



    /**
     * 批量增加角色关联的用户
     * @param {Object} data 用户ID和角色ID集合
     */
    static async addUserRoleBatch(data) {
        return await UserRole.bulkCreate(data);
    }

    /**
     * 根据角色ID删除用户和角色关联
     * @param {Number} role_id 角色ID
     */
    static async deleteUserRoleByRoleId(role_id) {
        return await UserRole.destroy({
            where: {
                role_id
            }
        })
    }
    /**
     * 根据用户ID删除用户和角色关联
     * @param {Number} user_id 角色ID
     */
    static async deleteUserRoleByUserId(user_id) {
        return await UserRole.destroy({
            where: {
                user_id
            }
        })
    }


}

module.exports = UserRoleModel