
export default function CatItem({ name, cuteness, age, image, extra }) {
  return (
    <div className="cat-detail">
      <h3>{name}</h3>
      <p>Cuteness: {cuteness}</p>
      <img src={image} width="75px" />
      <p>Age: {age}</p>
      <p>{extra}</p>
    </div>
  );
}

