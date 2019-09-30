/**
├── schema
    └── routes.js
*/
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('routes', {
        // ID
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true,
        },
        // 名称
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'name',
        },
        // 路径
        path: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'path',
        },
        // 组件
        component: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'component',
        },
        // 是否显示
        hidden: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'hidden',
        },
        // 导航标题
        title: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'title',
        },
        // 重定向
        redirect: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'redirect',
        },
        // 图标
        icon: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'icon',
        },
        //描述
        desc: {
            type: DataTypes.TEXT,
            allowNull: true,
            field: 'desc',
        },
        //父级ID
        parentId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'parentId',
        },
        //职务权限ID
        roles:{
            type: DataTypes.STRING,
            allowNull: true,
            field: 'roles',
        },
    }, {
        // 如果为 true 则表的名称和 model 相同，即 user
        // 为 false MySQL创建的表名称会是复数 users
        // 如果指定的表名称本就是复数形式则不变
        freezeTableName: true,
        timestamps: false
    })

}