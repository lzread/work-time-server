/**
├── modules
    └── department.js
*/

// 引入刚刚在第五点建立连接mysql数据库的db.js文件
const db = require('../config/db');
// 引入Sequelize对象
const Sequelize = db.sequelize;
// 引入上一步的用户数据表模型文件
const Departments = Sequelize.import('../schema/departments');
// 自动创建表
Departments.sync({ force: false });

Departments.hasMany(
    Departments,
    {
        as: 'children',
        foreignKey: 'parentId',
    }
);


class DepartmentsModel {
    /**
     * 创建部门
     * @param {*} data 
     */
    static async create(data) {
        return await Departments.create(data)
    }
    /**
     * 编辑部门
     * @param {*} data 
     */
    static async edit(data) {
        const { name, id } = data;
        return await Departments.update(
            {
                name,
            }, {
            where: {
                id
            },
        })
    }
    /**
     * 根据部门ID生成部门树
     * @param {*} id 
     */
    static async getTreeList(id) {
        return await Departments.findAll({
            where: {
                id
            },
            include: {
                model: Departments,
                as: 'children',
                required: false,
                include: {
                    all: true,
                    nested: true,
                }
            }
        })
    }


}

module.exports = DepartmentsModel