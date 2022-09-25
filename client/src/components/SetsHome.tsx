import { NavLink } from 'react-router-dom';
import { standardSets } from '../static/scripts/standardSets';

export const SetsHome = () => {
  return (
    <div id='home-sets-container'>
      {standardSets.map((set: any, index: number) => (
        <div className='select-set ' key={index}>
          <NavLink to={set.link}>
            <p className='set-title'>{set.name}</p>
            <img className='set-image' src={set.img} alt={set.name} />
          </NavLink>
        </div>
      ))}
    </div>
  );
};
