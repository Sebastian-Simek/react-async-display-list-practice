
export default function RecipeItem({ name, ingredients, day, stars }) {
  return (
    <div className="recipe-detail">
      <p>{day}</p>
      <h3>{name}</h3>
      <ul>
        {ingredients.map((ingredient, i) => <li key={ingredient + i}>{ingredient}</li>)}
      </ul>
      <p>Rating: {stars}</p>

    </div>
  );
}

