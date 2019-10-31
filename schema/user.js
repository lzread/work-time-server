/**
├── schema
    └── user.js
    用户表
*/
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user', {
        // 用户ID
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true,
        },
        // 用户名
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'username',
        },
        // 密码
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'password'
        },
        // 真实姓名
        realname: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'realname'
        },
        // 邮箱
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'email'
        },
        // 电话
        phone: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'phone'
        },
        // 头像
        avatar: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'avatar'
        },
        // 自我介绍
        introduction: {
            type: DataTypes.TEXT,
            allowNull: true,
            field: 'introduction'
        },
        // 状态 0 正常 1 停用 2删除
        status: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'status',
            defaultValue: '0'
        },

    }, {
        // 如果为 true 则表的名称和 model 相同，即 user
        // 为 false MySQL创建的表名称会是复数 users
        // 如果指定的表名称本就是复数形式则不变
        freezeTableName: true,
        timestamps: false
    })

}