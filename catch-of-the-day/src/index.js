// import react js
import React from 'react';
// import render dom method. react isn't just for the web!
import { render } from 'react-dom';
// import react router parts
import { BrowserRouter, Match, Miss } from 'react-router';

// import the CSS file
import './css/style.css';

// import the App component
import App from './components/App';
// import the StorePicker component
import StorePicker from './components/StorePicker';
// import the NotFound component
import NotFound from './components/NotFound';

// some people call this main or app
// it's basically the main nav control
const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={StorePicker} />
        <Match exactly pattern="/store/:storeId" component={App} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

// this will call App or StorePicker
render(<Root/>, document.querySelector('#main'));