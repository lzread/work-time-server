const db = require('../config/db');
const Sequelize = db.sequelize;
const Op = db.Op;
const UserJob = Sequelize.import('../schema/user_job');
UserJob.sync({ force: false });

class UserJobModel {}

module.exports = UserJobModel