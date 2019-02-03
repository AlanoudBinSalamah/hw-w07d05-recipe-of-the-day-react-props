import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

      <h2>Recipe of The Day</h2>
      
      <IngredientsContainer/>
      <RecipesContainer/>

      </div>
    );
  }
}

export default App;
