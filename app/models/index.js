
const dbConfig = require("../config/db.config");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorAlias:false
    }
);

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize
db.tutorials = require("./tutorials.model")(sequelize,Sequelize);

/* db:{
    Sequelize: Sequelize,
    sequelize: sequelize,
    tutorials: Tutorials
} */

module.exports = db;