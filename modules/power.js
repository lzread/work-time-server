const db = require('../config/db');
const Sequelize = db.sequelize;
const Op = db.Op;
const Power = Sequelize.import('../schema/power');
const RolePower = Sequelize.import('../schema/role_power');
Power.sync({ force: false });

class PowerModel {


    /**
     * 获取当前菜单节点权限列表
     * @param {Number} menu_id 菜单ID
     */
    static async getPowers(menu_id) {
        return await Power.findAll({
            where: {
                menu_id
            }
        });
    }
    /**
     * 获取当前菜单节点已分配的权限列表
     * @param {Number} role_id 角色ID
     * @param {Number} menu_id 菜单ID
     */
    static async getAssignPowers(menu_id, role_id) {
        return await Sequelize.query(`SELECT t1.* FROM power t1 LEFT JOIN role_power t2 ON t1.id = t2.power_id WHERE menu_id = ${menu_id} AND t2.role_id = ${role_id}`, {
            type: Sequelize.QueryTypes.SELECT
        });
    }

    /**
     * 删除角色和权限关联
     * @param {Number} menu_id 菜单ID
     */
    static async deleteRolePower(menu_id) {
        return await Sequelize.query(`DELETE FROM role_power a WHERE EXISTS(SELECT 1 FROM power b WHERE a.power_id = b.id AND b.menu_id = ${menu_id})`);
    }

    /**
     * 增加角色和权限关联
     * @param {Object} data 
     */
    static async addRolePower(data) {
        return await RolePower.bulkCreate(data);
    }













}

module.exports = PowerModel