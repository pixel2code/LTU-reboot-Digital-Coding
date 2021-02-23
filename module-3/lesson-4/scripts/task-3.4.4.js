const favouriteRecipe = {
  recipeTitle : 'Spaghetti Bolognese',
  servings: 6,
  ingredients: [
    '1 tbsp olive oil', 
    '500g mince beef', 
    'tomato sauce'
  ],
  directions: [
    'Make Bolognese sauce',
    'step 2',
    'step 3'
  ]
}


let ingredients = favouriteRecipe.ingredients;

// console.log( ingredients );

for ( let index = 0; index < ingredients.length; index++ ) {

  console.log( ingredients[ index ] );

}

let directions = favouriteRecipe.directions;

for ( let index = 0; index < directions.length; index++ ) {

  console.log( directions[ index ] );

}