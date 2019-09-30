/**
├── schema
    └── users.js
*/
const moment = require('moment');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('users', {
        // 用户ID
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true,
        },
        // 登录用户名
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'username',
        },
        // 登录密码
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'password'
        },
        // 姓名
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'name',
        },
        // 头像
        avatar: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'avatar',
        },
        // 出生日期
        birth: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'birth'
        },
        // 性别 0男 1女
        sex: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'sex'
        },
        // 电话1
        tel1: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'tel1'
        },
        // 电话2
        tel2: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'tel2'
        },

        // 邮件
        mail: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'mail'
        },
        // 地址
        address: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'address'
        },
        // 学历
        education: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'education'
        },
        // 学校
        school: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'school'
        },
        // 专业
        major: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'major'
        },
        // 毕业时间
        graduation: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'graduation'
        },
        // 是否冻结 0正常 1冻结
        freeze: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'freeze'
        },
        // 是否停用 0正常 1冻结
        stop: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'stop'
        },
        // 自我介绍
        introduction: {
            type: DataTypes.TEXT,
            allowNull: true,
            field: 'introduction'
        },
        // 部门ID
        departmentId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'departmentId',
        },
        // 职务ID
        jobId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'jobId'
        },
    }, {
        // 如果为 true 则表的名称和 model 相同，即 user
        // 为 false MySQL创建的表名称会是复数 users
        // 如果指定的表名称本就是复数形式则不变
        freezeTableName: true,
        timestamps: false
    })

}