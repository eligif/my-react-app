import React, { useContext,useEffect } from 'react'
import Recipe from './Recipe'
import { RecipeContext } from './App'

export default function RecipeList({ recipes }) {
  const { handleRecipeAdd,handleSearchRecipe } = useContext(RecipeContext)


  useEffect(()=>{


  })
  return (
    <>
    <div className='recipe-list__button-search-container'>
      <button className='btn btn_search ml-2 mr-1'>search</button>
      <label htmlFor='search_input mr-1'></label>
      <input id='recipe-list__input search_input' onInput={e => handleSearchRecipe(e.target.value)} type="text"></input>
    </div>
    <div className=" recipe-list">
      <div>
      {recipes.map(recipe => {
          return (
            <Recipe key={recipe.id} {...recipe} />
          )
        })}
     </div>
      <div className="recipe-list__add-recipe-btn-container">
        <button
          className="btn btn__primary ml-1"
          onClick={handleRecipeAdd}
        >
          Add Recipe
        </button>
      </div>
    </div>
    </>
  )
}