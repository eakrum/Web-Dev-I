const express = require("express");
const app = express();
const configRoutes = require("./routes");

const port = process.env.port || 3000;

configRoutes(app);

app.listen(port, () => {
  console.log("server listening on port ", port);
});
