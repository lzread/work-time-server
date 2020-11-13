/**
├── schema
    └── user_role.js
    用户与角色关联表
*/
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user_role', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true,
        },
        //用户ID
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'user_id',
        },
        //角色ID
        role_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'role_id',
        }
    }, {
        freezeTableName: true,
        timestamps: false
    })

}