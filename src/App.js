import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { getRecipes } from './services/fetch-utils.js';
import RecipeList from './RecipeList';


function App() {

  const [recipes, setRecipes] = useState([]);

  async function loadRecipeData() {
    const data = await getRecipes();
    setRecipes(data);
  }

  useEffect(() => {
    loadRecipeData();
  }, []);


  return (
    <div className="App">
      <RecipeList recipes={recipes}/>
    </div>
  );
}

export default App;
