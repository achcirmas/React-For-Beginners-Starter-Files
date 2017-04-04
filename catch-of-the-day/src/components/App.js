// import react js
import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';

// make our first component
class App extends React.Component {
  constructor() {
    // initialize the react component called App
    // so we can use this
    super();
    this.loadSamples = this.loadSamples.bind(this);
    this.addFish = this.addFish.bind(this);
    // instead of react create and getInitialState,
    // use ES6 class/constructor
    this.state = {
      fishes: {},
      order: {}
    };
  }

  addFish(fish) {
    // update our state
    // 1. get a copy of the state
    // the ... is an ES2017 spread
    // it will take every item from our object
    // and puts it in a new object
    const fishes = {...this.state.fishes};
    // add in our new fish
    // milliseconds since january 1st 1970
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    // set state 
    // in ES6 this is the same as {fishes: fishes}
    this.setState({ fishes });
  }

  loadSamples() {
    this.setState({
      fishes: sampleFishes
    });
  }


  // needs at least one method (render)
  render() {
    // <Header /> is not the same as <header>
    return(
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="list-of-fishes">
          {/* Object.keys returns an array
            ["fish1","fish2","fish3"]

            .map loops over the array

            key={key} is like an ID
            
            details gives the fish properties: desc, image, name
           */}
          {
            Object
            .keys(this.state.fishes)
            .map(key => <Fish key={key} details={this.state.fishes[key]} />)
          }
          </ul>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
      </div>
    )
  }
}

export default App;