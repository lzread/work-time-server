const MenuModel = require('../modules/menu')
class MenuController {

    static async getAllMenus(ctx) {
        try {
            let query = await MenuModel.getMenus();
            const data = treeList(query);
            function treeList(data) {
                let obj = [];
                let map = [];
                data.forEach(item => {
                    map[item.id] = item;
                });
                data.forEach(item => {
                    let parent = map[item.parent_id];

                    if (item.roles) {
                        item.roles = item.roles.split(',');
                    } else {
                        item.roles = [];
                    }


                    if (parent) {
                        if (!Array.isArray(parent.children)) {
                            parent.children = [];
                        }
                        parent.children.push(item);
                    } else {
                        obj.push(item);
                    }

                });
                return obj;
            }
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
                msg: '查询失败',
            }
        }

    }

    static async getMenus(ctx) {
        try {
            const data = await MenuModel.getMenus();
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
                msg: '查询失败',
            }
        }
    }





}
module.exports = MenuController