/**
├── schema
    └── role.js
    角色表
*/
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('role', {
        // 角色ID
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true,
        },
        // 角色代码
        role_code: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'role_code',
        },
        // 角色名称
        role_name: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'role_name',
        },
        // 角色描述
        role_desc: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'role_desc',
        },
        // 状态 -1 无法操作 0 正常 1 停用 2删除
        status: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'status',
            defaultValue:'0' 
        },
    }, {
        // 如果为 true 则表的名称和 model 相同，即 user
        // 为 false MySQL创建的表名称会是复数 users
        // 如果指定的表名称本就是复数形式则不变
        freezeTableName: true,
        timestamps: false
    })

}