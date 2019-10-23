/**
├── modules
    └── department.js
*/

// 引入刚刚在第五点建立连接mysql数据库的db.js文件
const db = require('../config/db');
// 引入Sequelize对象
const Sequelize = db.sequelize;
// 引入Sequelize操作符
const Op = db.Op;
// 引入上一步的用户数据表模型文件
const Departments = Sequelize.import('../schema/departments');
// 自动创建表
Departments.sync({ force: false });






class DepartmentsModel {

    static async addDepartment(data) {
        return await Departments.create(data)
    }

    static async updateDepartment(data) {
        const { id, name, parentId } = data;
        return await Departments.update(
            {
                name,
                parentId
            }, {
            where: {
                id
            },
        })
    }

    static async deleteDepartment(id) {
        return await Departments.destroy({
            where: {
                [Op.or]: [
                    { id: id },
                    { parentId: id }
                ]
            },
        })
    }

    static async getDepartments() {
        return await Departments.findAll();
    }


}

module.exports = DepartmentsModel