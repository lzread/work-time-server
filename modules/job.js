const db = require('../config/db');
const Sequelize = db.sequelize;
const Op = db.Op;
const Job = Sequelize.import('../schema/job');
Job.sync({ force: false });

class JobModel {
    /**
     * 查询职务列表
     */
    static async getJobs() {
        return await User.findAll();
    }

    /**
     * 新建职务
     * @param {*} data 职务数据模型
     */
    static async addJob(data) {
        return await Job.create(data)
    }

    /**
     * 更新职务
     * @param {*} data 职务数据模型
     */
    static async updateJob(data) {
        const { id } = data;
        return await Job.update(
            {
                where: {
                    id
                }
            })
    }

    /**
     * 删除职务
     * @param {*} id 职务ID
     */
    static async deleteJob(id) {
        return await Job.destroy({
            where: {
                id
            }
        })
    }
}

module.exports = JobModel