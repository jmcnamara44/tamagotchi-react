import React from 'react';
import PropTypes from 'prop-types';

function Stats(props){

  function handleDrink(){
    props.onImproveThirst();
  }
  function handleEat(){
    props.onImproveHunger();
  }
  function handleSleep(){
    props.onImproveEnergy();
  }
  return (
    <div>
      <h3>Thirst {props.drink}/10</h3>
      <button onClick={handleDrink}>Hydrate</button>
      <h3>Hunger {props.eat}/10</h3>
      <button onClick={handleEat}>Feed</button>
      <h3>Energy {props.sleep}/10</h3>
      <button onClick={handleSleep}>Make it Sleep</button>
    </div>
  );
}

Stats.propTypes = {
  eat: PropTypes.number,
  sleep: PropTypes.number,
  drink: PropTypes.number,
  onImproveHunger: PropTypes.func,
  onImproveThirst: PropTypes.func,
  onImproveEnergy: PropTypes.func
}

export default Stats;
