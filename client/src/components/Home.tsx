import { SetsHome } from './SetsHome';
import { SetsCarousel } from './SetsCarousel';
import { useEffect } from 'react';

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
