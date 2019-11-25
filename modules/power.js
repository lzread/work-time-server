const db = require('../config/db');
const Sequelize = db.sequelize;
const Op = db.Op;
const Power = Sequelize.import('../schema/power');
Power.sync({ force: false });

class PowerModel {


    /**
     * 查询权限列表
     */
    static async getPowers() {
        return await Power.findAll();
    }

    /**
     * 新建权限
     * @param {*} data 权限数据模型
     */
    static async addPower(data) {
        return await Power.create(data)
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