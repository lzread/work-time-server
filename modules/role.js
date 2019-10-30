/**
├── modules
    └── role.js
*/

// 引入刚刚在第五点建立连接mysql数据库的db.js文件
const db = require('../config/db');
// 引入Sequelize对象
const Sequelize = db.sequelize;
// 引入Sequelize操作符
const Op = db.Op;
// 引入上一步的用户数据表模型文件
const Role = Sequelize.import('../schema/role');
const RoleMenu = Sequelize.import('../schema/role_menu');

// 自动创建表
Role.sync({ force: false });


class RoleModel {




}

module.exports = RoleModel