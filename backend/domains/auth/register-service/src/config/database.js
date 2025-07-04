const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_URL, {
<<<<<<< HEAD
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
=======
  dialect: 'postgres',
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // let conection without CA validate
    }
  }
>>>>>>> 8b13fef8a6c49356c4d44e0a6179de14531a9888
});

module.exports = { sequelize };
