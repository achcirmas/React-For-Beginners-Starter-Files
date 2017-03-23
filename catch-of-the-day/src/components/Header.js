import React from 'react';

// stateless functional component
// could also be written
// var Header = function() {}

const Header = (props) => {
  return (
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
        <span>{props.tagline}</span>
      </h3>
    </header>
  )
}

export default Header;