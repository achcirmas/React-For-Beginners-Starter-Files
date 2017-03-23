// import react js
import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

// make our first component
class App extends React.Component {
  // needs at least one method (render)
  render() {
    // <Header /> is not the same as <header>
    return(
      <div className="catch-of-the-day">
        <div className="menu">
          <Header />
        </div>
        <Order />
        <Inventory />
      </div>
    )
  }
}

export default App;