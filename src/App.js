import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { getRecipes, getCats } from './services/fetch-utils.js';
import RecipeList from './RecipeList';
import CatList from './CatList';


function App() {

  const [recipes, setRecipes] = useState([]);
  const [cats, setCats] = useState([]);

  async function loadRecipeData() {
    const data = await getRecipes();
    setRecipes(data);
  }

  async function loadCatData() {
    const data = await getCats();
    setCats(data);
  }

  useEffect(() => {
    loadRecipeData();
    loadCatData();
  }, []);


  return (
    <div className="App">
      <label> Recipes:
        <RecipeList recipes={recipes}/>
      </label>
      <label> Cats:
        <CatList cats={cats}/>
      </label>

      <footer>Sebastian Simek 2022</footer>
    </div>
  );
}

export default App;
