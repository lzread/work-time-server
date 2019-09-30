/**
├── controllers
    └── jobs.js
*/
const JobsModel = require('../modules/jobs')
class JobsController {
    static async getRoles(ctx) {
        let data = await JobsModel.getRoles(ctx.params.id);
        ctx.response.status = 200;
        ctx.body = {
            code: 200,
            msg: '查询成功',
            data,
        }
    }
}
module.exports = JobsController