const mongoCollections = require("../config/mongoCollections");
const recipes = mongoCollections.recipes;
const uuid = require("node-uuid");

async function getAllRecipes() {
  const recipeCollection = await recipes();
  const allRecipes = await recipeCollection.find({}).toArray();
  return allRecipes;
}

async function getRecipeById(id) {
  if (!id) throw "You must provide a recipe ID";
  console.log(typeof id);
  const recipeCollection = await recipes();
  const reqRecipe = await recipeCollection.findOne({ _id: id });
  if (reqRecipe === null) throw "recipe with that id could not be found";
  return reqRecipe;
}

async function createRecipe(data) {
  if (!data) {
    throw "No data given";
  }

  const recipeCollection = await recipes();

  const newRecipe = await recipeCollection.insertOne(data);
  if (data.insertedCount === 0) throw "Could not create the recipe";

  return await getRecipes();
}

async function deleteRecipeById(id) {
  if (!id) throw "You must provide a recipe ID to remove a recipe";
  const recipeCollection = await recipes();
  const removeRecipe = await recipeCollection.removeOne({ _id: id });
  if (removeTodo.deletedCount === 0) {
    throw "Unable to remove recipe";
  }
}

module.exports = {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  deleteRecipeById
};
