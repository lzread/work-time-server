/**
├── controllers
    └── roles.js
*/
const RolesModel = require('../modules/roles')

class RolesController {

    

    static async getRoles(ctx) {

        const data = await RolesModel.getRoles();

        ctx.response.status = 200;
        ctx.body = {
            code: 200,
            message: '查询成功',
            data
        }
    }


    static async addRole(ctx) {
        let req = ctx.request.body;
        try {
            const data = await RolesModel.addRole(req);
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                msg: '创建成功',
                data
            }
        } catch (err) {
            ctx.response.status = 412;
            ctx.body = {
                code: 200,
                msg: '创建失败',
                data: err
            }
        }
    }



    static async updateRole(ctx) {
        let req = ctx.request.body;
        try {
            const data = await RolesModel.updateRole(req);
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                msg: '创建成功',
                data
            }
        } catch (err) {
            ctx.response.status = 412;
            ctx.body = {
                code: 200,
                msg: '创建失败',
                data: err
            }
        }
    }


    static async deleteRole(ctx) {
        let id = ctx.params.id;
        const data = await DepartmentsModel.deleteRole(id);
        try {
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
}
module.exports = RolesController