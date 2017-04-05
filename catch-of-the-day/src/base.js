// connect to Firebase

import Rebase from 're-base';

const base = Rebase.createClass({
  apiKey: "AIzaSyB7bbsGcYCkiOayHJ0niPuJVrVxYxBLlFg",
  authDomain: "catch-of-the-day-sam-rich.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-sam-rich.firebaseio.com"
});

export default base;