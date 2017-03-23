// import react js
import React from 'react';
// import render dom method. react isn't just for the web!
import { render } from 'react-dom';

// import the component
import StorePicker from './components/StorePicker';
// and put it in the dom somewhere
render(<StorePicker/>, document.querySelector('#main'));