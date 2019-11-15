const db = require('../config/db');
const Sequelize = db.sequelize;
const Op = db.Op;
const Power = Sequelize.import('../schema/power');
Power.sync({ force: false });

class PowerModel {
    /**
     * 根据角色ID查询和菜单ID查询当前菜单节点分配的权限
     * @param {*} role_id 角色ID
     * @param {*} menu_id 菜单ID
     */
    static async getPowerByRoleIdAndMenuId(role_id, menu_id) {
        const sql = `SELECT t3.menu_name, GROUP_CONCAT(t2.power_name) FROM role_power t1 LEFT JOIN power t2 ON t1.power_id = t2.id LEFT JOIN menu t3 ON t2.menu_id = t3.id WHERE t1.role_id = ${role_id} AND t3.id = ${menu_id}`
        return await Sequelize.query(sql, {
            type: Sequelize.QueryTypes.SELECT
        });
    }

    /**
     * 新建权限
     * @param {*} data 权限数据模型
     */
    static async addPower(data) {
        return await Power.create(data)
    }

    /**
     * 更新权限
     * @param {*} data 权限数据模型
     */
    static async updatePower(data) {
        const { id } = data;
        return await Power.update(
            {
                where: {
                    id
                }
            })
    }

    /**
     * 删除权限
     * @param {*} id 权限ID
     */
    static async deletePower(id) {
        return await Power.destroy({
            where: {
                id
            }
        })
    }
}

module.exports = PowerModel