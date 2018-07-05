import React from 'react';
import Header from './Header';
import StatList from './StatList';
import robot from '../assets/images/creature.png';

class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      thirst: 15,
      hunger: 20,
      energy: 30
    };
    this.decreaseHealthMeters = this.decreaseHealthMeters.bind(this);
  }
  componentDidMount() {
      this.healthUpdateTimer = setInterval(() =>
        this.decreaseHealthMeters(), 10000
      );
    }
  decreaseHealthMeters() {
    this.setState({thirst: this.state.thirst-1});
    this.setState({hunger: this.state.hunger-1});
    this.setState({energy: this.state.energy-1});
  }

  render() {
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
            text-align: center;
          }


        `}</style>
        <Header />
        <img src={robot}/>
        <StatList thirsty={this.state.thirst} hungry={this.state.hunger} tired={this.state.energy}/>
      </div>
    );
  }
}

export default App;
