import React, {Component} from 'react';

const Ingredient=(props)=>{
    const ingredients = props.Ingredient;
    return(
        <div className="ingred">
        
        <ul>
<li>Ingrediant:{ingredients.Ingredient}</li>
<li>Amount:{ingredients.amount}</li>

        </ul>

        </div>
        
    )
}

export default Ingredient;


