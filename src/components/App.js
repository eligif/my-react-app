import React, {useState,useEffect} from 'react'
import '../css/App.css'
import  '../css/recipe-edit.css'

import  uuidv4  from 'uuid/v4';
import RecipeList from './RecipeList';
import RecipeEdit from './RecipeEdit';
export const RecipeContext = React.createContext()



function App() {

const [selctedRecipeId, setSelctedRecipeId] = useState();
const [recipes,setRecipe] = useState(SampleRecipies) ;
const selctedRecipe = recipes.find(r => r.id === selctedRecipeId)
const LOCAL_STORAGE_KEY = "cookingWithReact.recipes"
useEffect(() =>{

  const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
  if(recipeJSON != null) setRecipe(JSON.parse(recipeJSON))
  
},[])


useEffect(() => {

    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(recipes))
   
},[recipes])




 const recipeContextValue = {
  handleRecipeAdd : handleRecipeAdd,
  handleRecipeDelete : handleRecipeDelete ,
  handleSelectedRecipe : handleSelectedRecipe,
  handleRecipeChange:handleRecipeChange,
  handleSearchRecipe:handleSearchRecipe
}

function handleSelectedRecipe(id){
  setSelctedRecipeId(id)
}


function handleSearchRecipe(name){
  console.log("search")
  setRecipe(recipes.fill(recipe => recipe.name == name))
}
function handleRecipeChange(id,recipe){

  const NewRecipes = [...recipes]
  const index = NewRecipes.findIndex(r =>r.id ===id)
  NewRecipes[index] = recipe
  setRecipe(NewRecipes)
}

function handleRecipeAdd() {
  const newRecipe = {
    id: uuidv4(),
    name: '',
    servings: 1,
    cookTime: '',
    instructions: '',
    ingredients: [
      { id: uuidv4(), name: '', amount: '' }
    ]
  }
  handleSelectedRecipe(newRecipe.id)
  setRecipe([...recipes, newRecipe])
}





  function handleRecipeDelete(id) {
    
    setRecipe(recipes.filter(recipe => recipe.id !== id))
  }
  
  reportWebVitals(console.log)

return (

  
  <RecipeContext.Provider value={recipeContextValue}>
  <RecipeList 
  
  recipes={recipes}
  handleRecipeAdd={handleRecipeAdd}
  handleRecipeDelete= {handleRecipeDelete}
  handleSearchRecipe= {handleSearchRecipe}

  />
   {selctedRecipe && <RecipeEdit recipe = {selctedRecipe} />}
      
      </RecipeContext.Provider>


  )
}


const SampleRecipies = [
{

  id:1,
  name:'French fries',
  servings:'3',
  cookTime:"1:45",
  instructions:" 1.put salt on the fries\n  2.put another thing\n 3.eat the fries",
  ingredients:[
{
    id:1,
    name:'oil',
    amount:'15kg'
},
{
  id:2,
  name:'suger',
  amount:'3kg'
}
  ]

},
{
  id:2,
  name:'Kuba Bamia',
  servings:'5',
  cookTime:"0:45",
  instructions:"1.put salt on the kuba\n2.put another thing\n3.eat the kuba",
  ingredients:[
    {
        id:1,
        name:'caramel',
        amount:'10kg'
    },
    {
      id:2,
      name:'paprika',
      amount:'5 lb'
    }
      ]
},
{
  id:3,
  name:'Ceasar Salad',
  servings:'50',
  cookTime:"6:45",
  instructions:"1.put salt on the tomato\n2.put another thing\n3.eat the salad",
  ingredients:[
    {
        id:1,
        name:'sweet',
        amount:'10kg'
    },
    {
      id:2,
      name:'kamon',
      amount:'5 lb'
    }
      ]
}

]

export default App;
