/**
├── schema
    └── roles.js
    角色表
*/
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('roles', {
        // 角色ID
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true,
        },
        // 角色名称
        RoleName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'RoleName',
        },

    }, {
        // 如果为 true 则表的名称和 model 相同，即 user
        // 为 false MySQL创建的表名称会是复数 users
        // 如果指定的表名称本就是复数形式则不变
        freezeTableName: true,
        timestamps: false
    })

}