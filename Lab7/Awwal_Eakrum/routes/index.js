const recipeRoutes = require("./recipeRoutes");

const constructor = app => {
  app.use("/recipes", recipeRoutes);

  app.use("*", (req, res) => {
    res.status(404).json({ error: "Not found" });
  });
};

module.exports = constructor;
