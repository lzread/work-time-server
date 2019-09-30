/**
├── schema
    └── jobs.js
*/
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('jobs', {
        // 职务ID
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true,
        },
        // 职务名称
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'name',
        },
        // 职务描述
        desc: {
            type: DataTypes.TEXT,
            allowNull: true,
            field: 'desc',
        },
        // 职务权限菜单
        routes: {
            type: DataTypes.TEXT,
            allowNull: true,
            field: 'routes',
        },
    }, {
        // 如果为 true 则表的名称和 model 相同，即 user
        // 为 false MySQL创建的表名称会是复数 users
        // 如果指定的表名称本就是复数形式则不变
        freezeTableName: true,
        timestamps: false
    })

}