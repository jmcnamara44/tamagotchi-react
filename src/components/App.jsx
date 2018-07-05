import React from 'react';
import Header from './Header';
import robot from '../assets/images/creature.png';

function App(){
  return (
    <div>
      <style global jsx>{`
        img {
          margin-left: auto;
          margin-right: auto;
          height: 500px;
          display: block;
        }
        body {
          background-color: green;
        }


      `}</style>
      <Header />
      <img src={robot}/>
    </div>
  );
}

export default App;
