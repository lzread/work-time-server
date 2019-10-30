const db = require('../config/db');
const Sequelize = db.sequelize;
const Op = db.Op;
const Job = Sequelize.import('../schema/job');
Job.sync({ force: false });

class JobModel {}

module.exports = JobModel