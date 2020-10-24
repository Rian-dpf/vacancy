const db = require("./db");

const Vaga = db.sequelize.define("vagas", {
  titulo: {
    type: db.Sequelize.STRING,
  },

  descricao: {
    type: db.Sequelize.TEXT,
  },

  cidade: {
    type: db.Sequelize.STRING,
  },

  email: {
    type: db.Sequelize.STRING,
  },
});

// Vaga.sync({ force: true });

module.exports = Vaga;
