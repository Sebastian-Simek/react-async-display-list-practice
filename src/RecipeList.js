import RecipeItem from './RecipeItem';

export default function RecipeList({ recipes }) {
  return (
    <div className='recipe'>
      {
        recipes.map((recipe, i) => 
          <RecipeItem 
            key={recipe.name + recipe.id + i}
            {...recipe}
          />)
      }
    </div>
  );
}

