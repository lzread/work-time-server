/**
├── schema
    └── power.js
    权限表
*/
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('power', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true,
        },
        //权限名称
        power_name: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'power_name',
        },
    }, {
        // 如果为 true 则表的名称和 model 相同，即 user
        // 为 false MySQL创建的表名称会是复数 users
        // 如果指定的表名称本就是复数形式则不变
        freezeTableName: true,
        timestamps: false
    })

}