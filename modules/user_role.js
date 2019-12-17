const db = require('../config/db');
const Sequelize = db.sequelize;
const Op = db.Op;
const UserRole = Sequelize.import('../schema/user_role');
UserRole.sync({ force: false });

class UserRoleModel {
    /**
     * 增加用户角色关联
     * @param {Object} data 
     */
    static async addUserRole(data) {
        return await UserRole.create(data)
    }
    /**
     * 删除用户角色关联
     * @param {Number} user_id 用户ID
     */
    static async deleteUserRole(user_id) {
        return await UserRole.destroy({
            where: {
                user_id
            }
        })
    }
}

module.exports = UserRoleModel