import React from 'react';
import './LandingPage.css';
import './NavBar.css';
import LandingPage from './LandingPage';
import NavigationBar from './NavigationBar';
import HomePage from './HomePage';
import {BrowserRouter, Route} from 'react-router-dom';
import NavBar, { ElementsWrapper } from 'react-scrolling-nav';

class App extends React.Component{
  render(){
    return(
        <div>
          <BrowserRouter>
          <div>
          <NavigationBar />

          </div>

            <div>
            <Route path="/" exact component={LandingPage} />
            <Route path="/home" component={HomePage} />
            </div>
          </BrowserRouter>
        </div>
    );
  };
};

export default App;
