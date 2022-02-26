const sequelize = require("sequelize");
const db = require("../db");

module.exports = db.define("student", {
    id: {type: sequelize.INTEGER, primaryKey: true},
    name: {type: sequelize.STRING},
    age: {type: sequelize.STRING},
    gender: {type: sequelize.STRING},
    class: {type: sequelize.INTEGER},
    });