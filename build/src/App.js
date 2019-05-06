import React from 'react';
import './LandingPage.css';
import {BrowserRouter, Route} from 'react-router-dom';

const LandingPage = () =>{
  return(<div className="landing-text">
      <h1>Grange Mobile App</h1>
      <img src ="../images/logo.jpeg" alt="Tu Dublin Logo" className="logo" />
      <div className="container">
        <button type="button" className="lecturer"><b>Lecturer</b></button>
        <button type="button" className="student"><b>Student</b></button>
      </div>
  </div>);
};

const ModulesPage = () =>{
  return(

      <nav className="navbar navbar-inverse">
      <div className="container-fluid">
      <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">TU Dublin Grange Mobile App1</a>
      </div>
      <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav">
           <li><a href="Home.html"><span className="glyphicon glyphicon-home"></span> Home </a></li>
           <li><a className="isDisabled" href="#">Exam Time Table</a></li>
           <li><a href="MyCourses.html">My Course</a></li>

          </ul>
          <ul className="nav navbar-nav navbar-right">
           <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Logout</a></li>
          </ul>
      </div>
      </div>
      </nav>

  );
};

class App extends React.Component{
  render(){
    return(
        <div>
          <BrowserRouter>
            <div>
            <Route path="/" exact component={LandingPage} />
            <Route path="/modules" component={ModulesPage} />
            </div>
          </BrowserRouter>
        </div>
    );
  };
};

export default App;
