const express = require("express");
const router = express.Router();
const {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  deleteRecipeById
} = require("../data/recipeData");

router.get("/", async (req, res) => {
  console.log("get /recipes");
  const recipes = await getAllRecipes();
  res.json(recipes);
});
router.get("/:id", async (req, res) => {
  try {
    console.log("getting... ", req.params.id);
    const recipe = await getRecipeById(req.params.id);
    res.json(recipe);
  } catch (e) {
    res.status(404).json({ error: "Recipe not found" });
  }
});

router.post("/", async (req, res) => {
  console.log(req.body.title);
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

router.put("/:id", async (req, res) => {});

router.patch("/:id", async (req, res) => {});

router.delete("/:id", async (req, res) => {
  try {
    console.log("Deleting... ", req.params.id);
    const removedRecipe = await deleteRecipeById(req.params.id);
    res.send("Removed recipe!");
  } catch (e) {
    res.status(404).json({ error: "Recipe to delete not found" });
  }
});

module.exports = router;
