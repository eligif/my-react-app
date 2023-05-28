import React from 'react'

export default function ({ingredient,handleIngredientChange,handleIngredientDelete}) {

  function handleChange(changes) {
    console.log("hello")
    handleIngredientChange(ingredient.id, { ...ingredient, ...changes })
  }
  return (
    <>
      <input
        className="recipe-edit__input"
        type="text"
        value={ingredient.name}
        onInput={e => handleChange({name:e.target.value})}

      />
      <input
        className="recipe-edit__input"
        type="text"
        value={ingredient.amount}
        onInput={(e) => handleChange({amount:e.target.value})}
      />
      <button onClick={()=>handleIngredientDelete(ingredient.id)} className="btn btn_danger">&times;</button>
    </>
  )
}
