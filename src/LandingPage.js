import React from 'react';

class LandingPage extends React.Component{
  render(){
    return(<div className="landing-text">
        <h1>Grange Mobile App</h1>
        <img src ="../images/logo.jpeg" alt="Tu Dublin Logo" className="logo" />
        <div className="container">
          <button type="button" className="lecturer"><b>Lecturer</b></button>
          <button type="button" className="student"><b>Student</b></button>
        </div>
    </div>);
  }
}

export default LandingPage;
