/**
├── schema
    └── job.js
    部门表
*/
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('job', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true,
        },
        //职务名称
        job_name: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'job_name',
        },
        // 状态 0 正常 1 停用 2删除
        status: {
            type: DataTypes.INTEGER,
            allowNull: false,
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