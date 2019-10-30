const db = require('../config/db');
const Sequelize = db.sequelize;
const Op = db.Op;
const UserDept = Sequelize.import('../schema/user_dept');
UserDept.sync({ force: false });

class UserDeptModel {}

module.exports = UserDeptModel