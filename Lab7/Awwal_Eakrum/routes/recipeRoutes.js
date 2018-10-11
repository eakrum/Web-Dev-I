const express = require("express");
const router = express.Router();
const {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  deleteRecipeById,
  updatedRecipe
} = require("../data/recipeData");

//TODO add PATCH route functionality

router.get("/", async (req, res) => {
  console.log("get /recipes");
  const recipes = await getAllRecipes();
  res.json(recipes);
});
router.get("/:id", async (req, res) => {
  try {
    console.log(`Getting recipes from /recipes/:id with an id of ${req.params.id}`);
    const recipe = await getRecipeById(req.params.id);
    res.json(recipe);
  } catch (e) {
    res.status(404).json({ error: "Recipe not found" });
  }
});

router.post("/", async (req, res) => {
  console.log(`Posting to /recipes`)
  try {
    const newRecipe = await createRecipe(
      req.body.title,
      req.body.ingredients,
      req.body.steps
    );

    res.json(newRecipe);
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

router.put("/:id", async (req, res) => {
  console.log(`Put to /recipes/:id with an id of ${req.params.id}`)
  try {
    await getRecipeById(req.params.id);
  } catch (e) {
    res.status(404).json({ error: "recipe not found" });
  }

  try {
    const updatedRecipe = await updatedRecipe(req.params.id, req.body);
    res.json(updatedRecipe);
  } catch {
    res.status(500).json({ error: e });
  }
});

router.patch("/:id", async (req, res) => {});

router.delete("/:id", async (req, res) => {
  console.log(`Deleting recipe from /recipes/:id with an id of ${req.params.id}`)
  try {
    const removedRecipe = await deleteRecipeById(req.params.id);
    res.send("Removed recipe!");
  } catch (e) {
    res.status(404).json({ error: "Recipe to delete not found" });
  }
});

module.exports = router;
