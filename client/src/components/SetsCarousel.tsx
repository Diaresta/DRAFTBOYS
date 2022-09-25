import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { standardSets } from '../static/scripts/standardSets';

export const SetsCarousel = () => {
  const [imageView, setImageView] = useState(0);
  const slidesTotal: number = standardSets.length - 1;

  const slidePrevious = () => {
    if (imageView === 0) {
      setImageView(slidesTotal);
    } else {
      setImageView(imageView - 1);
    }
  };

  const slideNext = () => {
    if (imageView === slidesTotal) {
      setImageView(0);
    } else {
      setImageView(imageView + 1);
    }
  };

  return (
    <div id='home-sets-container'>
      <button id='left-arrow' onClick={slidePrevious}>
        <i className='fa-solid fa-arrow-left' />
      </button>
      {standardSets.map((set: any, index: number) => (
        <div
          className={
            index === imageView
              ? 'select-set active-slide'
              : 'select-set hidden-slide'
          }
          key={index}
        >
          {index === imageView && (
            <NavLink to={set.link}>
              <p className='set-title'>{set.name}</p>
              <img className='set-image' src={set.img} alt={set.name} />
            </NavLink>
          )}
        </div>
      ))}

      <button id='right-arrow' onClick={slideNext}>
        <i className='fa-solid fa-arrow-right' />
      </button>
    </div>
  );
};
