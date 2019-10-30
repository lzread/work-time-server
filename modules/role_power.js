const db = require('../config/db');
const Sequelize = db.sequelize;
const Op = db.Op;
const RolePower = Sequelize.import('../schema/role_power');
RolePower.sync({ force: false });

class RolePowerModel {}

module.exports = RolePowerModel