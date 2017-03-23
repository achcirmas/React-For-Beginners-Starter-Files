import React from 'react';

class Header extends React.Component {
  // needs at least one method (render)
  render() {
    return(
      <header className="top">
        <h1>
        Catch 
        <span className="ofThe">
          <span className="of">of</span>
          <span className="the">the</span>
        </span>
        Day
        </h1>
        <h3 class="tagline">
          <span>{this.props.tagline}</span>
        </h3>
      </header>
    )
  }
}

export default Header;