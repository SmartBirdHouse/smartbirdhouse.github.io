import React from 'react';
import '../App.css'
import Tabs from '../Komponentit/Tabs';

//Komponentti renderöi etusivun sisällön ja kutsuu Tabs-komponenttia.
  
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