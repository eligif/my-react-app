import React, { useContext } from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit'
import {RecipeContext} from './App'
import RecipeList from './RecipeList'
import  uuidv4  from 'uuid/v4';

 
 export default function 
 ({recipe}) {

   const { handleRecipeChange ,handleSelectedRecipe} = useContext(RecipeContext)


   function handleChange(changes) {
    handleRecipeChange(recipe.id, { ...recipe, ...changes })
  }

  function handleIngredientAdd(){
const NewIngredient = {

  id:uuidv4(),
  name:'',
  amount:''
}

handleChange({ingredients: [...recipe.ingredients,NewIngredient]})

  }

  function handleIngredientDelete(id){

    handleChange({ingredients:recipe.ingredients.filter(i =>i.id !==id )})
  }

  function handleIngredientChange(id,ingredient){
  const NewIngredient = [...recipe.ingredients]
  const index = NewIngredient.findIndex(i =>i.id ===id)
  NewIngredient[index] = ingredient
    handleChange({ingredients : NewIngredient})
  }
   return (
     <div className='recipe-edit'>
        <div className='recipe-edit_remove-button-container'>
          <button
          onClick={() => handleSelectedRecipe(undefined)}
           className='btn recipe-edit__remove-button'>
            &times;
            </button>  
        </div> 
        <div className='recipe-edit__details-grid'>
            <label className='recipe-edit__label' htmlFor='name'>Name</label>
            <input className='recipe-edit__input' onInput={e => handleChange({name:e.target.value})} value={recipe.name} type="text" id="name" name='name'></input>
            
            <label className='recipe-edit__label' htmlFor='cookTime'>CookTime</label>
            <input  className='recipe-edit__input'  onInput={e => handleChange({cookTime:e.target.value})} value={recipe.cookTime} type="text" id="cookTime" name='cookTime'></input>
                   
            <label className='recipe-edit__label' htmlFor='servings'>Servings</label>
            <input  className='recipe-edit__input' onInput={e => handleChange({servings: parseInt(e.target.value) || ''})} value={recipe.servings} type="number" id="servings" name='servings' min='1'></input>

            <label className='recipe-edit__label' htmlFor='instructions'>Instructions</label>
            <textarea  className='recipe-edit__input' onInput={e => handleChange({instructions:e.target.value})}  value={recipe.instructions}  name='instructions' id='instructions'>

            </textarea>

        </div>
        <br/>
        <label className='recipe-edit__label' name="ingredients"></label>
        <div className='recipe-edit__ingredient-grid'>
            <div>Name</div>
            <div>Amount</div>
            <div></div>
            {recipe.ingredients.map(ingredient =>(
             <RecipeIngredientEdit key={ingredient.id}
              ingredient={ingredient}
              handleIngredientDelete = {handleIngredientDelete}
              handleIngredientChange={handleIngredientChange}
              />

            )
    
            )}



            {/* ingredient components */}
            <div className='recipe-edit-addingre
            dient-btn-container'>
                <button onClick={() =>handleIngredientAdd()} className='btn btn__primary' id='btnAddIngredients'>Add Ingredient</button>
            </div>
        </div>
     </div>

   )
 }
 