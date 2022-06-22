import CandyItem from './CandyItem';

export default function CandyList({ candies }) {
  return (
    <div className='candy'>
      {
        candies.map((candy, i) => 
          <CandyItem 
            key={candy.id + i + candy.name}
            {...candy}
          />)
      }
    </div>
  );
}

