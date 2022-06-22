import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { getRecipes, getCats, getCandy, getBirds } from './services/fetch-utils.js';
import RecipeList from './RecipeList';
import CatList from './CatList';
import CandyList from './CandyList';
import BirdList from './BirdList';


function App() {

  const [recipes, setRecipes] = useState([]);
  const [cats, setCats] = useState([]);
  const [candy, setCandy] = useState([]);
  const [birds, setBirds] = useState([]);

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

  async function loadBirdData() {
    const data = await getBirds();
    setBirds(data);
  }

  useEffect(() => {
    loadRecipeData();
    loadCatData();
    loadCandyData();
    loadBirdData();
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
      <label> Birds:
        <BirdList birds={birds}/>
      </label>
      <footer>Sebastian Simek 2022</footer>
    </div>
  );
}

export default App;
