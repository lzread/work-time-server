/**
├── schema
    └── role_menu.js
    角色与菜单关联表
*/
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('role_menu', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true,
        },
        //角色ID
        role_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'role_id',
        },
        //菜单ID
        menu_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'menu_id',
        }
    }, {
        freezeTableName: true,
        timestamps: false
    })

}