/**
├── controllers
    └── departments.js
*/
const DepartmentsModel = require('../modules/departments')

class DepartmentsController {


    /**
     * 创建部门
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async create(ctx) {
        let req = ctx.request.body;

        if (req.parentId && req.name) {
            try {
                const ret = await DepartmentsModel.create(req);
                console.log(ret);
                const data = await DepartmentsModel.getTreeList(ret.id);
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '创建部门成功',
                    data
                }

            } catch (err) {
                ctx.response.status = 412;
                ctx.body = {
                    code: 200,
                    msg: '创建部门失败',
                    data: err
                }
            }
        } else {
            ctx.response.status = 416;
            ctx.body = {
                code: 200,
                msg: '参数不齐全',
            }
        }

    }
    /**
     * 编辑部门
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async edit(ctx) {
        let req = ctx.request.body;

        if (req.parentId && req.name) {
            await DepartmentsModel.edit(req);
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                msg: '更新部门成功',
            }
        } else {
            ctx.response.status = 416;
            ctx.body = {
                code: 200,
                msg: '参数不齐全',
            }
        }

    }


    static async getTreeList(ctx) {

        let id = ctx.params.id;

        let data = await DepartmentsModel.getTreeList(id);
        ctx.response.status = 200;
        ctx.body = {
            code: 200,
            msg: '查询成功',
            data,
        }


    }
}

module.exports = DepartmentsController