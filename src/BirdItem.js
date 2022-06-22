
export default function BirdItem({ name, type, extra }) {
  return (
    <div className="bird-detail">
      <h3>{name}</h3>
      <p>{type}</p>
      <p>{extra}</p>
    </div>
  );
}

