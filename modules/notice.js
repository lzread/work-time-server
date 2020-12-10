/**
├── modules
    └── notice.js
*/

// 引入刚刚在第五点建立连接mysql数据库的db.js文件
const db = require('../config/db');
// 引入Sequelize对象
const Sequelize = db.sequelize;
// 引入Sequelize操作符
const Op = db.Op;
// 引入上一步的用户数据表模型文件
const Notice = Sequelize.import('../schema/notice');

// 自动创建表
Notice.sync({ force: false });

class NoticeModel {
    /**
     * 列表
     */
    static async list(page, limit, keyword) {
        const data = await Notice.findAndCountAll({
            where: {
                title: {
                    [Op.like]: `%${keyword}%`
                }
            },
            limit: limit,
            offset: limit * (page - 1),
            raw: true
        })
        return {
            total: data.count,
            rows: data.rows
        };
    }
    /**
     * 新建
     */
    static async add(data) {
        return await Notice.create(data)
    }
    /**
     * 编辑
     */
    static async edit(data) {
        const { id } = data;
        return await Notice.update(
            data,
            {
                where: {
                    id
                }
            })
    }
    /**
     * 删除
     */
    static async del(id) {
        return await Notice.destroy({
            where: {
                id
            }
        })
    }
}

module.exports = NoticeModel