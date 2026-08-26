let recipe = {
    name: "jollof rice",
    cookTimeMinutes: 30,
    servings: 4,
    ingredients: ["rice", "tomatoes", "onions", "pepper"]

};

function recipeInfo(recipe) {
    console.log(recipe.name + " takes " + recipe.cookTimeMinutes + " minutes " + "and serves " + recipe.servings + " people ");
};

function ingredientCount(recipe) {
    return recipe.ingredients.length;
};

function timePerServing(recipe) {
    return recipe.cookTimeMinutes / recipe.servings;
};

recipeInfo(recipe);
ingredientCount(recipe);
timePerServing(recipe);

console.log("Numebr of ingredients: " + ingredientCount(recipe));
console.log("Time per serving: " + timePerServing(recipe));
