// import react js
import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

// make our first component
class App extends React.Component {
  constructor() {
    // initialize the react component called App
    // so we can use this
    super();
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


  // needs at least one method (render)
  render() {
    // <Header /> is not the same as <header>
    return(
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory addFish={this.addFish}/>
      </div>
    )
  }
}

export default App;