/**
├── schema
    └── user_dept.js
    用户与部门关联表
*/
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user_dept', {
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
        //部门ID
        dept_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'dept_id',
        }
    }, {
        freezeTableName: true,
        timestamps: false
    })

}