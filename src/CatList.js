import CatItem from './CatItem';

export default function CatList({ cats }) {
  return (
    <div className="cat">
      {
        cats.map((cat, i) => <CatItem 
          key={cat.name + i}
          {...cat}
        />)
      }
    </div>
  );
}

