/**
├── schema
    └── notice.js
    公告表
*/
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('notice', {
        // ID
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true,
        },
        // 标题
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'title',
        },
        // 内容
        content: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'content',
        },
        // 封面
        image: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'image',
        },
        // 发布时间
        release_time: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'release_time',
        },
        // 状态 0 正常 -1 禁用
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