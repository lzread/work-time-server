/**
├── controllers
    └── routes.js
*/
const RoutesModel = require('../modules/routes')
class RoutesController {
    static async getRoutes(ctx) {
        const ret = await RoutesModel.getRoutes();
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
module.exports = RoutesController