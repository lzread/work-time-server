/**
├── controllers
    └── departments.js
*/
const DepartmentsModel = require('../modules/departments')
class DepartmentsController {

    static async addDepartment(ctx) {
        let req = ctx.request.body;
        try {
            const ret = await DepartmentsModel.addDepartment(req);
            const data = await DepartmentsModel.getDepartments(ret.id);
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


    }

    static async updateDepartment(ctx) {
        const req = ctx.request.body;
        try {
            const data = await DepartmentsModel.updateDepartment(req);
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                msg: '更新成功',
                data
            }
        } catch (err) {
            ctx.response.status = 412;
            ctx.body = {
                code: 200,
                msg: '更新失败',
                data: err
            }
        }

    }


    static async deleteDepartment(ctx) {
        const id = ctx.params.id;
        try {
            const data = await DepartmentsModel.deleteDepartment(id);
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                msg: '删除成功',
                data
            }
        } catch (err) {
            ctx.response.status = 412;
            ctx.body = {
                code: 200,
                msg: '删除失败',
                data: err
            }
        }
    }

    static async getDepartments(ctx) {

        try {
            const ret = await DepartmentsModel.getDepartments();
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

        } catch (err) {
            ctx.response.status = 412;
            ctx.body = {
                code: 200,
                msg: '查询失败',
                data: err
            }
        }
    }


}
module.exports = DepartmentsController