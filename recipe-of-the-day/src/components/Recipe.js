import React from 'react';


const Recipe=(props)=>{
    const recipes=props.Recipe;
    return(
        <div className="recipe">
        <ul>
            <li>Name:{recipes.name}</li>
            <li>Serving:{recipes.servings}</li>
            <li>Category:{recipes.category}</li>
        </ul>
        </div>
    )
}
export default Recipe;
