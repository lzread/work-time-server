const db = require('../config/db');
const Sequelize = db.sequelize;
const Op = db.Op;
const Power = Sequelize.import('../schema/power');
Power.sync({ force: false });

class PowerModel {}

module.exports = PowerModel