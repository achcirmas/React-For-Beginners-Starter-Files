// import react js
import React from 'react';
import { getFunName } from '../helpers';

// make our first component
class StorePicker extends React.Component {
  // constructor() {
  //   // super creates the react component
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  //   // looks for goToStore method and binds it to this
  //   // this is a good idea if you're going to use a method more than once
  // }

  goToStore(event) {
    event.preventDefault();
    console.log("you changed the url");
    // first grab the text from the box
    const storeId = this.storeInput.value;
    // second we're going to transition from / to /store/storeId
    this.context.router.transitionTo(`/store/${storeId}`)
  }
  // needs at least one method (render)
  render() {
    // you can only return one parent element
    // you must self-close tags like XHTML
    // don't put comments at the top level in a return statement
    return(
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
        { /* this is how to write a comment inside a return statement */ }
        <h2>Please enter a store.</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input}} />
        <button type="submit">Visit Store →</button>
      </form>
    )
  }
}

// surface the router
StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;