/**
├── modules
    └── menus.js
*/

// 引入刚刚在第五点建立连接mysql数据库的db.js文件
const db = require('../config/db');
// 引入Sequelize对象
const Sequelize = db.sequelize;
// 引入Sequelize操作符
const Op = db.Op;
// 引入上一步的用户数据表模型文件
const Menus = Sequelize.import('../schema/menus');
// 自动创建表
Menus.sync({ force: false });





class MenusModel {
    
    static async getMenusById(id) {
        return await Menus.findAll({
            where: {
                id,
            },
        })
    }

}

module.exports = MenusModel