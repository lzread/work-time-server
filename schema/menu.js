/**
├── schema
    └── menu.js
    菜单表
*/
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('menu', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true,
        },
        //菜单名称
        menu_name: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'menu_name',
        },
        //路由名称
        route_name: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'route_name',
        },
        //菜单图标
        icon: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'icon',
        },
        //是否隐藏
        hidden: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'hidden',
            defaultValue:'false' 
        },
        //父级ID
        parent_id: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'parent_id',
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