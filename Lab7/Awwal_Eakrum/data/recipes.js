const collections = require("../config/mongoCollections");
const recipes = collections.recipes;
const uuid = require("node-uuid");


const addRecipe = async (title, ingredients, steps) => {
    if(!title || typeof title !== "string") throw "Title was either not provided or isnt a string";
    if(!ingredients || !Array.isArray(ingredients)) throw "Ingredients was either not provided or isnt a type of array";
    if(!steps || !Array.isArray(steps)) throw "Ingredients was either not provided or isnt a type of array";

    const recipeObject = {
        _id: uuid(),
        title: title,
        ingredients: ingredients,
        steps: steps      
    };

    const recipeCollection =  await recipes();
    const recipeInsert = await recipeCollection.insertOne(recipeObject);
    if (recipeInsert.insertedCount === 0) throw "Could not create the recipe";

    const newId = recipeInsert.insertedId;

    return await getRecipe(newId);

} 


const allRecipes = async () => {
    const arrayrecipes = [];
    const recipeCollection = await recipes();
    const recipeFinder = await recipeCollection.find({}).toArray();
    for(let i = 0; i < recipeFinder.length; i++){
        const testerObject = {}
        testerObject["_id"] = recipeFinder[i]._id;
        testerObject["title"] = recipeFinder[i].title;
        arrayrecipes.push(testerObject)
    }
    return arrayrecipes;
}


const getRecipe = async id => {
    if(!id) throw "No id was provided";

    const recipeCollection = await recipes();
    const findRecipe = await recipeCollection.findOne({_id : id})

    if (findRecipe === null) throw 'No recipe was found with that given id';

    return findRecipe;

}




const updateRecipe = async (id, updatedRecipe) => {
    if(!id) throw "No id was provided";
    if(!updatedRecipe) throw "No id was provided";

    const recipeCollection = await recipes();
    const updatedData = {}

    if(updatedRecipe.title){
        updatedData.title = updatedRecipe.title;
    }

    if(updatedRecipe.ingredients){
        updatedData.ingredients = updatedRecipe.ingredients;
    }

    if(updatedRecipe.steps){
        updatedData.steps = updatedRecipe.steps
    }

    let updatingRecipe = {
        $set: updatedData
    }

    const updateInfo = await recipeCollection.updateOne({ _id: id }, updatingRecipe);  //updates task with recipe id, and object
    if (updateInfo.modifiedCount === 0) throw 'could not update recipe sucessfully';


    return await getRecipe(id)


}

const patchRecipe = async (id, updatedRecipe) => {
    if(!id) throw "No id was provided";
    if(!updatedRecipe) throw "No id was provided";

    const recipeCollection = await recipes();
    const updatedData = {}

    if(updatedRecipe.title){
        updatedData.title = updatedRecipe.title;
    }

    if(updatedRecipe.ingredients){
        updatedData.ingredients = updatedRecipe.ingredients;
    }

    if(updatedRecipe.steps){
        updatedData.steps = updatedRecipe.steps
    }

    let updatingRecipe = {
        $set: updatedData
    }

    const updateInfo = await recipeCollection.updateOne({ _id: id }, updatingRecipe);  //updates task with recipe id, and object
    if (updateInfo.modifiedCount === 0) throw 'could not update recipe sucessfully';


    return await getRecipe(id)
}


const deleteRecipe = async id => {
    if(!id) throw "No id was provided";

    const recipeCollection = await recipes();
    const removeRecipe = await recipeCollection.removeOne({ _id: id });

    if (removeRecipe.deletedCount === 0) {
        throw `Could not delete recipe with id of ${id}`;
      }
}



module.exports = {
    addRecipe,
    allRecipes,
    getRecipe,
    updateRecipe,
    patchRecipe,
    deleteRecipe
}