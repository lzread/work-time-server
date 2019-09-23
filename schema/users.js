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
        // 姓名
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'name',
        },
        // 生日
        birth: {
            type: DataTypes.DATE,
            allowNull: false,
            field: 'birth'
        },
        // 性别 0男 1女
        sex: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'sex'
        },
        // 手机号/登录
        tel: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'tel'
        },
        // 登录密码
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'password'
        },
        // 邮件
        mail: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'mail'
        },
        // 地址
        address: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'address'
        },
        // 是否冻结 0正常 1冻结
        freeze: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'freeze'
        },
        // 所属部门ID
        department_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'department_id'
        },
        // 所属部门名称
        department_name: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'department_name'
        },
        // 职务ID
        position_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'position_id'
        },
        // 职务
        position_name: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'position_name'
        },
        // 权限 0 超级管理员 1 普通用户
        roles: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'roles'
        },
        // 创建时间
        createdAt: {
            type: DataTypes.DATE,
            get() {
                return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss');
            }
        },
        // 更新时间
        updatedAt: {
            type: DataTypes.DATE,
            get() {
                return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm:ss');
            }
        }
    }, {
        // 如果为 true 则表的名称和 model 相同，即 user
        // 为 false MySQL创建的表名称会是复数 users
        // 如果指定的表名称本就是复数形式则不变
        freezeTableName: true
    })

}