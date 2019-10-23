/**
├── schema
    └── roles_menus.js
    角色与菜单关联表
*/
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('roles_menus', {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true,
        },
        //角色ID
        RoleId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'RoleId',
        },
        //菜单ID
        MenuId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'MenuId',
        }
    }, {
        // 如果为 true 则表的名称和 model 相同，即 user
        // 为 false MySQL创建的表名称会是复数 users
        // 如果指定的表名称本就是复数形式则不变
        freezeTableName: true,
        timestamps: false
    })

}