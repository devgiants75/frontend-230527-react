import React from 'react'
import { recipes } from './data'

export default function RenderingList03() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe => 
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <ul>
            {recipe.ingredients.map(ingredient => 
              <li key={ingredient}>{ingredient}</li>
            )}
          </ul>
        </div>
      )}
    </div>
  )
}
