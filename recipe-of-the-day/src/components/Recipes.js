import React, {Component} from 'react';
import recipes from '../data/recipes';
import Recipe from './Recipe';

class RecipesContainer extends Component{
    renderRecipes(){
        const recipesElement = recipes.map((element,index)=>{
            <Recipe Recipe ={element}key={index}/>
        })
        return recipesElement;
    }
    render(){
        return(
            <div className="recipe">
            <h1>{this.renderRecipes}</h1>
            
            </div>
            
        )
    }
}

export default RecipesContainer; 