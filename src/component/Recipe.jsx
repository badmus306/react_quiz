import React from 'react';
import RecipeItem from './RecipeItem';

const Recipe = (props) => {
    const { myrecipes } = props;
    return(
    <div className = "card-columns">
        <div>
        {myrecipes.map(recipe => (
         <RecipeItem
          key={Math.random() * 100}
          name={recipe.recipe.label}
          image={recipe.recipe.image}
          ingredientLines={recipe.recipe.ingredientLines}
        />
         ))}
        </div>
    </div>
    );
}

export default Recipe;