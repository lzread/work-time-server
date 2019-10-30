const db = require('../config/db');
const Sequelize = db.sequelize;
const Op = db.Op;
const UserRole = Sequelize.import('../schema/user_role');
UserRole.sync({ force: false });

class UserRoleModel {}

module.exports = UserRoleModel