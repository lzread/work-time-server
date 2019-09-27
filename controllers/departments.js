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
    /**
     * 删除部门
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async delete(ctx) {
        let id = ctx.params.id;
        if (id) {
            await DepartmentsModel.delete(id);
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                msg: '删除成功',
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
     * 部门树
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async getTreeList(ctx) {
        const ret = await DepartmentsModel.getTreeList();
        const node = JSON.stringify(ret);
        const data = tree(JSON.parse(node));
        function tree(data) {
            let map = {};
            let obj = [];
            data.forEach(item => {
                map[item.id] = item;
            })
            data.forEach(item => {
                let parent = map[item.parentId];
                if (parent) {
                    if (!Array.isArray(parent.children)) {

                        parent.children = []
                    };
                    parent.children.push(item);
                } else {
                    obj.push(item);
                }
            })
            return obj;
        }
        ctx.response.status = 200;
        ctx.body = {
            code: 200,
            msg: '查询成功',
            data,
        }
    }
}
module.exports = DepartmentsController