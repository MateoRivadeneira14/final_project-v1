const { Sequelize } = require('sequelize');
require('dotenv').config();
console.log("DB_URL desde .env:", process.env.DB_URL);


const sequelize = new Sequelize(process.env.DB_URL, {
  dialect: 'postgres',
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
<<<<<<< HEAD
      rejectUnauthorized: false
=======
      rejectUnauthorized: false // permite conexión sin validar CA
>>>>>>> 8b13fef8a6c49356c4d44e0a6179de14531a9888
    }
  }
});

module.exports = { sequelize };
