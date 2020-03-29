const express = require ("express");
const cors = require("cors");
const routes = require("./routes"); //"./" pois é um arquivo e não um pacote.

const app = express();

/**
app.use(cors({
  origin: "http//meuapp.com"  //caso estivesse ja em aplicação.
}));
 */
app.use(cors());  //n esta rodando, entao  por hora esta bom essa linha de comando.
app.use(express.json());    //impoortante vir antes dos codigos, esse comando "avisa" o express para tranformar (ler) os requerimentos em json para objeto do javascript.
app.use(routes);
/**
 * Rota / Recurso
 */

/**
 * Métodos HTPP:
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma infromação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: parâmetros nomeados enviados na rota após "?" (Filtors, Paginação), ex: .../users?name=Diego
  * Route Params: Parâmetros utilizados para identificar  recursos, ex: ...users/1, vai buscar o usuario id: 1
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  * Driver: SELECT * FROM users
  * Query Builder: table("users").select("*").where()
  */



app.listen(3333);