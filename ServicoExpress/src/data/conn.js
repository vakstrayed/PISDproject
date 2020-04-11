const Sequelize = require('sequelize');
const sequelize = new Sequelize('cvlipe', 'root', 'W3@r30n3', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

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
