/**
├── modules
    └── routes.js
*/

const db = require('../config/db');
// 引入Sequelize对象
const Sequelize = db.sequelize;
// 引入Sequelize操作符
const Op = db.Op;
// 引入上一步的用户数据表模型文件
const Routes = Sequelize.import('../schema/routes');
// 自动创建表
Routes.sync({ force: false });





class RoutesModel {

    static async getRoutes() {
        return await Routes.findAll();
    }

}

module.exports = RoutesModel