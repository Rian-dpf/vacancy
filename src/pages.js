const Vaga = require("./database/Vaga");

module.exports = {
  index(req, res) {
    Vaga.findAll({ order: [["id", "DESC"]] }).then((vagas) => {
      return res.render("index", { vagas: vagas });
    });
  },

  cadastro(req, res) {
    return res.render("cadastro");
  },

  busca(req, res) {
    return res.render("busca");
  },

  saveVaga(req, res) {
    Vaga.create({
      titulo: req.body.titulo,
      descricao: req.body.descricao,
      cidade: req.body.cidade,
      email: req.body.email,
    })
      .then(() => {
        return res.redirect("/");
      })
      .catch((erro) => {
        return res.send("Erro ao cadastrar");
      });
  },

  deleteVaga(req, res) {
    Vaga.destroy({ where: { id: req.params.id } })
      .then(() => {
        return res.redirect("/");
      })
      .catch((erro) => {
        return res.send("Erro ao deletar vaga!");
      });
  },
};
