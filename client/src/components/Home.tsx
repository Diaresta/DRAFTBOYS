import { useEffect } from 'react';
import { SetsCarousel } from './SetsCarousel';
import { SetsHome } from './SetsHome';

export const Home = () => {
  useEffect(() => {
    document.title = `DRAFTBOYS - MTG Draft Simulator`;
  }, []);

  return (
    <div>
      <h1 className='page-titles'>Select a Set</h1>

      <div id='sets-full'>
        <SetsHome />
      </div>

      <div id='sets-carousel'>
        <SetsCarousel />
      </div>
    </div>
  );
};
