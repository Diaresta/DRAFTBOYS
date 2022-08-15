import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const ERROR_IMAGES = [
  '/images/error-images/404-0.png',
  '/images/error-images/404-1.png',
  '/images/error-images/404-2.png',
  '/images/error-images/404-3.png',
  '/images/error-images/404-4.png',
  '/images/error-images/404-5.png',
];

export const NotFound = () => {
  useEffect(() => {
    document.title = 'DRAFTBOYS - 404';
  }, []);

  return (
    <div>
      <img
        id='error-img'
        src={ERROR_IMAGES[Math.floor(Math.random() * ERROR_IMAGES.length)]}
        alt='404 Error'
      />
      <p id='error-p'>
        Why not start back at the{' '}
        <a id='error-a' href='/'>
          homepage
        </a>
        ?
      </p>
    </div>
  );
};
