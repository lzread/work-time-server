const db = require('../config/db');
const Sequelize = db.sequelize;
const Op = db.Op;
const Dept = Sequelize.import('../schema/dept');
Dept.sync({ force: false });

class DeptModel {}

module.exports = DeptModel