import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { getRecipes, getCats, getCandy } from './services/fetch-utils.js';
import RecipeList from './RecipeList';
import CatList from './CatList';
import CandyList from './CandyList';


function App() {

  const [recipes, setRecipes] = useState([]);
  const [cats, setCats] = useState([]);
  const [candy, setCandy] = useState([]);

  async function loadRecipeData() {
    const data = await getRecipes();
    setRecipes(data);
  }

  async function loadCatData() {
    const data = await getCats();
    setCats(data);
  }

  async function loadCandyData() {
    const data = await getCandy();
    setCandy(data);
  }

  useEffect(() => {
    loadRecipeData();
    loadCatData();
    loadCandyData();
  }, []);


  return (
    <div className="App">
      <label> Recipes:
        <RecipeList recipes={recipes}/>
      </label>
      <label> Cats:
        <CatList cats={cats}/>
      </label>
      <label> Candy:
        <CandyList candies={candy}/>
      </label>

      <footer>Sebastian Simek 2022</footer>
    </div>
  );
}

export default App;
