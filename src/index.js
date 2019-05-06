//Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter } from 'react-router-dom';
import App from './App.js';

class Apps extends React.Component{
  render(){
    return <div> Hello </div>
  };

};
//Create a react component

ReactDOM.render(<App />,document.querySelector('#landing-page'));
//Take the react component and show it on the screen
