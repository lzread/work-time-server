const db = require('../config/db');
const Sequelize = db.sequelize;
const Op = db.Op;
const UserRole = Sequelize.import('../schema/user_role');
UserRole.sync({ force: false });

class UserRoleModel {

    /**
     * 添加关联 用户角色
     * @param {Array} data 
     * [{
     *      user_id : value,    用户ID
     *      role_id : value     角色ID
     * }]
     */
    static async addUserRoleBatch(data) {
        return await UserRole.bulkCreate(data);
    }

    /**
     * 解除关联 用户角色
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