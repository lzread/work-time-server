const db = require('../config/db');
const Sequelize = db.sequelize;
const Op = db.Op;
const RoleMenu = Sequelize.import('../schema/role_menu');
RoleMenu.sync({ force: false });

class RoleMenuModel {
    /**
     * 增加角色关联的菜单
     * @param {Object} data 角色ID和菜单ID集合
     */
    static async addRoleMenuBatch(data) {
        return await RoleMenu.bulkCreate(data);
    }

    /**
     * 根据角色ID删除菜单和角色关联
     * @param {Number} role_id 角色ID
     */
    static async deleteRoleMenuByRoleId(role_id) {
        return await RoleMenu.destroy({
            where: {
                role_id
            }
        })
    }
}

module.exports = RoleMenuModel