/**
├── modules
    └── jobs.js
*/

// 引入刚刚在第五点建立连接mysql数据库的db.js文件
const db = require('../config/db');
// 引入Sequelize对象
const Sequelize = db.sequelize;
// 引入Sequelize操作符
const Op = db.Op;
// 引入上一步的用户数据表模型文件
const Jobs = Sequelize.import('../schema/jobs');
// 自动创建表
Jobs.sync({ force: false });





class JobsModel {

    static async getRoles(id) {
        return await Jobs.findOne({
            where: {
                id
            },
        });
    }

}

module.exports = JobsModel