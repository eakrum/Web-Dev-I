let express = require("express");
let about = require("./data/about");
let education = require("./data/education");
let story = require("./data/story");
let app = express();
let http = require("http");
let server;
let port = process.env.port || 3000;

server = http.createServer(app);

server.listen(port, () => {
  console.log("server listening on port ", port);
});

app.use("/about", (req, res) => {
  console.log("get /about");
  res.json(about)
});

app.use("/education", (req, res) => {
  console.log("get /education");
  res.json(education)
});

app.use("/story", (req, res) => {
  console.log("get /story");
  res.json(story)
});

app.use("*", (req, res) => {
  res.status(404).json({ error: "Error 404 Not found" });
});
