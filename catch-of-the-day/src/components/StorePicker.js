// import react js
import React from 'react';

// make our first component
class StorePicker extends React.Component {
  // needs at least one method (render)
  render() {
    // you can only return one parent element
    // you must self-close tags like XHTML
    // don't put comments at the top level in a return statement
    return(
      <form className="store-selector">
        { /* this is how to write a comment */ }
        <h2>Please enter a store.</h2>
        <input type="text" required placeholder="Store Name" />
        <button type="submit">Visit Store →</button>
      </form>
    )
  }
}

export default StorePicker;