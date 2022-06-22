import BirdItem from './BirdItem';

export default function BirdList({ birds }) {
  return (
    <div className='bird'>
      {
        birds.map((bird, i) => 
          <BirdItem 
            key={bird.name + i}
            {...bird}
          />)
      }
    </div>
  );
}

