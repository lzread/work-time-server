const db = require('../config/db');
const Sequelize = db.sequelize;
const Op = db.Op;
const RoleMenu = Sequelize.import('../schema/role_menu');
RoleMenu.sync({ force: false });

class RoleMenuModel {}

module.exports = RoleMenuModel