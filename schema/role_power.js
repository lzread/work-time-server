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
        // 如果为 true 则表的名称和 model 相同，即 user
        // 为 false MySQL创建的表名称会是复数 users
        // 如果指定的表名称本就是复数形式则不变
        freezeTableName: true,
        timestamps: false
    })

}