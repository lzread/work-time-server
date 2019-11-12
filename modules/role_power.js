/**
├── modules
    └── role_power.js
*/

// 引入刚刚在第五点建立连接mysql数据库的db.js文件
const db = require('../config/db');
// 引入Sequelize对象
const Sequelize = db.sequelize;
// 引入Sequelize操作符
const Op = db.Op;
// 引入上一步的用户数据表模型文件
const RolePower = Sequelize.import('../schema/role_power');



// 自动创建表
RolePower.sync({ force: false });







class RolePowerModel {



}

module.exports = RolePowerModel