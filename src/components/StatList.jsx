import React from 'react';
import Stats from './Stats';
import PropTypes from 'prop-types';

function StatList(props){
  return (
    <div>
      <Stats
        eat={props.hungry}
        sleep={props.tired}
        drink={props.thirsty}/>
    </div>
  );
}

StatList.propTypes = {
  thirsty: PropTypes.number,
  hungry: PropTypes.number,
  tired: PropTypes.number
}
export default StatList;
