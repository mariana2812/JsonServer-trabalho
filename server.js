const path = require("path");
const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");
const rules = require("./routes.json");

function createApp(database = path.join(__dirname, "db.json")) {
  const app = jsonServer.create();
  const router = jsonServer.router(database);

  app.db = router.db;
  app.use(cors());
  app.use(jsonServer.bodyParser);
  app.use(auth.rewriter(rules));
  app.use(auth);
  app.use(router);

  return app;
}

if (require.main === module) {
  const port = process.env.PORT || 3001;
  createApp().listen(port, () => {
    console.log("Servidor rodando na porta " + port);
  });
}

module.exports = createApp;
