const Sequelize = require("sequelize");
const sequelize = new Sequelize("vacancy", "root", "Rian080920022019&", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
};
