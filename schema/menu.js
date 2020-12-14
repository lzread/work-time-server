/**
├── schema
    └── menu.js
    菜单表
*/
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('menu', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true,
        },
        //路由名称
        name: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'name',
        },
        //标题
        title: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'title',
        },
        //路径
        path: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'path',
        },
        //组件
        component: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'component',
        },
        //图标
        icon: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'icon',
        },
        //缓存
        noCache: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'noCache',
            defaultValue: 'false'
        },
        //固定
        affix: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'affix',
            defaultValue: 'false'
        },
        //默认高亮
        activeMenu: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'activeMenu',
        },
        //重定向
        redirect: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'redirect',
        },
        //是否隐藏
        hidden: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'hidden',
            defaultValue: 'false'
        },
        //父级ID
        parent_id: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'parent_id',
            defaultValue: '0'
        },
        //功能分类 0菜单 1功能
        type: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'type',
            defaultValue: '0'
        },
        //排序
        sort: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'sort',
            defaultValue: '0'
        },

    }, {
        // 如果为 true 则表的名称和 model 相同，即 user
        // 为 false MySQL创建的表名称会是复数 users
        // 如果指定的表名称本就是复数形式则不变
        freezeTableName: true,
        timestamps: false
    })

}