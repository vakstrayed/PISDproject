const Sequelize = require('sequelize');
const sequelize = new Sequelize('cvlipe', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: 0,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const db = {};



db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.sequelize.sync({force: false}).then(() => {
  console.log('Drop and Resync with { force: false }');
});

db.crimes = require('../model/Crime')(sequelize,Sequelize)





module.exports = db;
