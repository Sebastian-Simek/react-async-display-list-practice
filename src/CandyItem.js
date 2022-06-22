
export default function CandyItem({ name, type, price }) {
  return (
    <div className="candy-detail">
      <h3>{name}</h3>
      <p>Type: {type}</p>
      <p>Price: ${price}</p>
    </div>
  );
}

