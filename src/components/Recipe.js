import {React,useContext,useEffect} from 'react'
import IngredientList from './IngredientList';
import {RecipeContext} from './App'

export default function Recipe(props){
    const {handleRecipeDelete,handleSelectedRecipe} =  useContext(RecipeContext)

const 
{
    id,
    name,
    cookTime,
    servings,
    instructions,
    ingredients,

    
} = props

console.log(ingredients)

useEffect(()=>{

   
    return ()=>{

    }
},[])


 {

  return (
      <>
    <div className='recipe'>
        <div className='recipe__header'>
        <h3 className='recipe__title'>{name}</h3>       
    </div>
    <div>
        <button onClick={() =>handleSelectedRecipe(id)} className='btn btn_edit mr-1'>Edit</button>
        <button  onClick={() => handleRecipeDelete(id)} className='btn btn_danger'>Delete</button>
                                
        </div>
    </div>
    <div className='recipe__row'>
        <span className='recipe__label'>Coooking Time:</span>
        <span className='recipe__value'>{cookTime}</span>
        
        <div className='recipe__row'>
        <span className='recipe__label'>Servings:</span>
        <span className='recipe__value'>{servings}</span>
    </div>
    
    <div>
        <span className='recipe__label'>instructions:</span>
        <div className='recipe__value recipe__value__instructions recipe__value--intented'>
           {instructions}
        </div>
        <span className='recipe__value'>ingredients:</span>
        <div className='recipe__value recipe__value--intented'> 
          <IngredientList ingredients={ingredients}/> 
        </div>
    </div>
    </div>
    </>
  )
}}
