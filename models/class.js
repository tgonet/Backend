const sequelize = require("sequelize");
const db = require("../db");

module.exports = db.define("class", {
    id: {type: sequelize.INTEGER, primaryKey: true},
    name: {type: sequelize.STRING},
});