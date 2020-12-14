const NoticeModel = require('../modules/notice')
class NoticeController {

    static async list(ctx) {
        const { page, limit, keyword } = ctx.query;
        try {
            let k = keyword || "";
            const data = await NoticeModel.list(parseInt(page), parseInt(limit), k);
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                message: '成功',
                data: data.rows,
                total: data.total
            }
        } catch (error) {
            ctx.response.status = 416;
            ctx.body = {
                code: 416,
                message: '失败',
            }
        }
    }

    static async add(ctx) {
        const request = ctx.request.body;
        try {
            const data = await NoticeModel.add(request);
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                message: '成功',
                data
            }
        } catch (error) {
            ctx.response.status = 416;
            ctx.body = {
                code: 416,
                message: '失败',
            }
        }
    }

    static async edit(ctx) {
        const request = ctx.request.body;
        try {
            const data = await NoticeModel.edit(request);
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                message: '成功',
                data
            }
        } catch (err) {
            ctx.response.status = 416;
            ctx.body = {
                code: 416,
                message: '失败',
            }
        }
    }

    static async del(ctx) {
        const { id } = ctx.params;
        try {
            const data = await NoticeModel.del(id);
            if (data == 1) {
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    message: '成功',
                }
            } else {
                ctx.response.status = 200;
                ctx.body = {
                    code: 412,
                    message: '失败',
                }
            }

        } catch (err) {
            ctx.response.status = 416;
            ctx.body = {
                code: 416,
                message: '失败',
            }
        }
    }

}
module.exports = NoticeController