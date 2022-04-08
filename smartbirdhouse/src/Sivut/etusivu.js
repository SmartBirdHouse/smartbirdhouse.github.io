import React from 'react';
import Video from '../Komponentit/Video';
import '../App.css'
import Tabs from '../Komponentit/Tabs';
  
const Etusivu = () => {
  return (
    <div className='etusivu'>
      <div>
        <p className='esittely'>Valitse, minkä linnunpöntön sisältöä haluat tarkastella:</p>
      </div>
      <div className='tabs'>
        <Tabs />
      </div>
    </div>
  );
};
  
export default Etusivu