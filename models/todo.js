const Sequelize = require('sequelize');

const sequelize = require('../util/database');
const Todo = sequelize.define('todo', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  todo: Sequelize.STRING,
  description: {
    type: Sequelize.STRING,
  },
  isCompleted:Sequelize.BOOLEAN
});



module.exports = Todo;
