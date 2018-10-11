const mongoCollections = require("../config/mongoCollections");
const recipes = mongoCollections.recipes;
const uuid = require("node-uuid");

//TODO make sure all data follows the required format?
//TODO make sure getAllRecipes only returns the title and ID in array format
//TODO add PUT and PATCH database functionality as outlined in recipeRoutes.js

async function getAllRecipes() {
  const recipeCollection = await recipes();
  const allRecipes = await recipeCollection.find({}).toArray();
  return allRecipes;
}

async function getRecipeById(id) {
  if (!id) throw "You must provide a recipe ID";
  const recipeCollection = await recipes();
  const reqRecipe = await recipeCollection.findOne({ _id: id });
  if (reqRecipe === null) throw "recipe with that id could not be found";
  return reqRecipe;
}

async function createRecipe(title, ingredients, steps) {
  const postedRecipe = {
    _id: uuid(),
    title: title,
    ingredients: ingredients,
    steps: steps
  };

  const recipeCollection = await recipes();

  const newRecipe = await recipeCollection.insertOne(postedRecipe);
  if (newRecipe.insertedCount === 0) throw "Could not create the recipe";
  const newId = newRecipe.insertedId;
  console.log("new id, ", newId);
  return await getRecipeById(newId);
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
