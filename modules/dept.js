const db = require('../config/db');
const Sequelize = db.sequelize;
const Op = db.Op;
const Dept = Sequelize.import('../schema/dept');
Dept.sync({ force: false });

class DeptModel {
    /**
     * 查询部门列表
     */
    static async getDepts() {
        return await User.findAll();
    }

    /**
     * 新建部门
     * @param {*} data 部门数据模型
     */
    static async addDept(data) {
        return await Depts.create(data)
    }

    /**
     * 更新部门
     * @param {*} data 部门数据模型
     */
    static async updateDept(data) {
        const { id } = data;
        return await Depts.update(
            {
                where: {
                    id
                }
            })
    }

    /**
     * 删除部门
     * @param {*} id 部门ID
     */
    static async deleteDept(id) {
        return await Depts.destroy({
            where: {
                id
            }
        })
    }
}

module.exports = DeptModel