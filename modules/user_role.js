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
        return await UserRole.bulkCreate(data)
    }
    /**
     * 删除用户角色关联
     * @param {Number} role_id 角色ID
     */
    static async deleteUserRole(role_id) {
        return await UserRole.destroy({
            where: {
                role_id
            }
        })
    }
}

module.exports = UserRoleModel