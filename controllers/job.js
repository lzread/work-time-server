const JobModel = require('../modules/job')

class JobController {

    /**
     * 查询职务列表
     */
    static async getJobs(ctx) {
        try {
            const data = await JobModel.getJobs();
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                message: '查询成功',
                data,
            }
        } catch (error) {
            ctx.response.status = 416;
            ctx.body = {
                code: 416,
                message: '查询失败',
            }
        }
    }

    /**
     * 新建职务
     */
    static async addJob(ctx) {
        const req = ctx.request.body;
        try {
            const data = await JobModel.addJob(req);
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                msg: '创建成功',
                data
            }
        } catch (error) {
            ctx.response.status = 416;
            ctx.body = {
                code: 416,
                msg: '创建失败',
            }
        }
    }

    /**
     * 更新职务
     */
    static async updateJob(ctx) {
        const req = ctx.request.body;
        try {
            const data = await JobModel.updateJob(req);
            if (data[0] == 1) {
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '更新成功',
                }
            } else {
                ctx.response.status = 200;
                ctx.body = {
                    code: 412,
                    msg: '更新失败',
                }
            }

        } catch (err) {
            ctx.response.status = 416;
            ctx.body = {
                code: 416,
                msg: '更新失败',
            }
        }
    }

    /**
     * 删除职务
     */
    static async deleteJob(ctx) {
        const id = ctx.params.id;
        try {
            const data = await JobModel.deleteJob(id);
            if (data == 1) {
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '删除成功',
                }
            } else {
                ctx.response.status = 200;
                ctx.body = {
                    code: 412,
                    msg: '删除失败',
                }
            }

        } catch (err) {
            ctx.response.status = 416;
            ctx.body = {
                code: 416,
                msg: '删除失败',
            }
        }
    }

}

module.exports = JobController