/**
├── schema
    └── user_job.js
    用户与职务关联表
*/
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user_job', {
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
        //职务ID
        job_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'job_id',
        }
    }, {
        freezeTableName: true,
        timestamps: false
    })

}