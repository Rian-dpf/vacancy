const express = require("express");
const path = require("path");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const pages = require("./pages.js");

const app = express();

app
  // Config arquivos estáticos
  .use(express.static("public"))

  // Config Body-Parser
  .use(bodyParser.urlencoded({ extended: false }))

  // Config handlebars
  .engine("handlebars", handlebars({ defaultLayout: "main" }))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "handlebars")

  // Config rotas
  .get("/", pages.index)
  .get("/cadastro", pages.cadastro)
  .get("/busca", pages.busca)
  .post("/save-vaga", pages.saveVaga)
  .get("/deletar/:id", pages.deleteVaga);

app.listen(3001);
