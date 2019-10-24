/**
├── schema
    └── departments.js
    部门表
*/
const moment = require('moment');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('departments', {
        // 部门ID
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true,
        },
        // 部门名称
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'name',
        },
        // 父级ID
        parentId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'parentId',
        },
        // 部门描述
        desc: {
            type: DataTypes.TEXT,
            allowNull: true,
            field: 'desc',
        },

    }, {
        // 如果为 true 则表的名称和 model 相同，即 user
        // 为 false MySQL创建的表名称会是复数 users
        // 如果指定的表名称本就是复数形式则不变
        freezeTableName: true,
        timestamps: false
    })

}