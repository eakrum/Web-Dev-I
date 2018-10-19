const express = require("express");
const router = express.Router();
const {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  deleteRecipeById,
  updateRecipe,
  patchRecipe
} = require("../data/recipeData");

//TODO add PATCH route functionality

router.get("/", async (req, res) => {
  console.log("get /recipes");
  const recipes = await getAllRecipes();
  res.json(recipes);
});
router.get("/:id", async (req, res) => {
  try {
    console.log(
      `Getting recipes from /recipes/:id with an id of ${req.params.id}`
    );
    const recipe = await getRecipeById(req.params.id);
    res.json(recipe);
  } catch (e) {
    res.status(404).json({ error: "Recipe not found" });
  }
});

router.post("/", async (req, res) => {
  console.log(`Posting to /recipes`);
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
  const updatedData = req.body;
  try {
    await getRecipeById(req.params.id);
    const updatingRecipe = await updateRecipe(
      req.params.id,
      updatedData
    );
    res.json(updatingRecipe);
  } catch (error) {
    res.status(404).json({ error: "Could not find recipe" });
  }
});

router.patch("/:id", async (req, res) => {
  const patchedData = req.body;
  try {
    await getRecipeById(req.params.id);
    const updatingRecipe = await patchRecipe(
      req.params.id,
      patchedData
    );
    res.json(updatingRecipe);
  } catch (error) {
    res.status(404).json({ error: "Could not find recipe" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await getRecipeById(req.params.id);
    await deleteRecipeById(req.params.id);
    res
      .status(200)
      .send(`The recipe with id of ${req.params.id} has been deleted`);
  } catch (error) {
    res.status(404).json({
      error: `Could not find and delete recipe with id of ${req.params.id}`
    });
  }
});

module.exports = router;
