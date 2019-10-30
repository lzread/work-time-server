/**
├── schema
    └── role_power.js
    角色与权限关联表
*/
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('role_power', {
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
        //权限ID
        power_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'power_id',
        }
    }, {
        freezeTableName: true,
        timestamps: false
    })

}