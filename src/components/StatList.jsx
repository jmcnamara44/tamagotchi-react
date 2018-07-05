import React from 'react';
import Stats from './Stats';
import PropTypes from 'prop-types';

function StatList(props){
  return (
    <div>
      <Stats
        eat={props.hungry}
        sleep={props.tired}
        drink={props.thirsty}
        onImproveHunger={props.onImproveHunger}
        onImproveThirst={props.onImproveThirst}
        onImproveEnergy={props.onImproveEnergy}
        />
    </div>
  );
}

StatList.propTypes = {
  thirsty: PropTypes.number,
  hungry: PropTypes.number,
  tired: PropTypes.number,
  onImproveHunger: PropTypes.func,
  onImproveThirst: PropTypes.func,
  onImproveEnergy: PropTypes.func
}
export default StatList;
