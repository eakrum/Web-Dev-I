const mongoCollections = require("../config/mongoCollections");
const recipes = mongoCollections.recipes;
const uuid = require("node-uuid");


async function getAllRecipes() {
  let arrayRecipes = [];
  const recipeCollection = await recipes();
  const allRecipes = await recipeCollection.find({}).toArray();
  for (let i = 0; i < allRecipes.length; i++) {
    const testerObject = {};
    testerObject["_id"] = allRecipes[i]._id;
    testerObject["title"] = allRecipes[i].title;
    arrayRecipes.push(testerObject);
  }
  return arrayRecipes;
}

async function getRecipeById(id) {
  if (!id) throw "You must provide a recipe ID";
  const recipeCollection = await recipes();
  const reqRecipe = await recipeCollection.findOne({ _id: id });
  if (reqRecipe === null) throw "recipe with that id could not be found";
  return reqRecipe;
}

async function createRecipe(title, ingredients, steps) {
  if (!title || typeof title !== "string")
    throw "Title was either not provided or isnt a string";
  if (!ingredients || !Array.isArray(ingredients))
    throw "Ingredients was either not provided or isnt a type of array";
  if (!steps || !Array.isArray(steps))
    throw "Ingredients was either not provided or isnt a type of array";

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

const deleteRecipeById = async id => {
  if (!id) throw "No id was provided";

  const recipeCollection = await recipes();
  const removeRecipe = await recipeCollection.removeOne({ _id: id });

  if (removeRecipe.deletedCount === 0) {
    throw `Could not delete recipe with id of ${id}`;
  }
};

const updateRecipe = async (id, updatedRecipe) => {
  if (!id) throw "No id was provided";
  if (!updatedRecipe) throw "No id was provided";

  const recipeCollection = await recipes();
  const updatedData = {};

  if (updatedRecipe.title) {
    updatedData.title = updatedRecipe.title;
  }

  if (updatedRecipe.ingredients) {
    updatedData.ingredients = updatedRecipe.ingredients;
  }

  if (updatedRecipe.steps) {
    updatedData.steps = updatedRecipe.steps;
  }

  let updatingRecipe = {
    $set: updatedData
  };

  const updateInfo = await recipeCollection.updateOne(
    { _id: id },
    updatingRecipe
  ); //updates task with recipe id, and object
  if (updateInfo.modifiedCount === 0)
    throw "could not update recipe sucessfully";

  return await getRecipeById(id);
};

const patchRecipe = async (id, updatedRecipe) => {
  if (!id) throw "No id was provided";
  if (!updatedRecipe) throw "No id was provided";

  const recipeCollection = await recipes();
  const updatedData = {};

  if (updatedRecipe.title) {
    updatedData.title = updatedRecipe.title;
  }

  if (updatedRecipe.ingredients) {
    updatedData.ingredients = updatedRecipe.ingredients;
  }

  if (updatedRecipe.steps) {
    updatedData.steps = updatedRecipe.steps;
  }

  let updatingRecipe = {
    $set: updatedData
  };

  const updateInfo = await recipeCollection.updateOne(
    { _id: id },
    updatingRecipe
  ); //updates task with recipe id, and object
  if (updateInfo.modifiedCount === 0)
    throw "could not update recipe sucessfully";

  return await getRecipeById(id);
};

module.exports = {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  deleteRecipeById,
  updateRecipe,
  patchRecipe
};
