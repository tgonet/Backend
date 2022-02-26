const Sequelize = require("sequelize");
const db = new Sequelize(process.env.CLEARDB_DATABASE_URL, {
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = db;