import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import { About, Dashboard, Lecture } from 'pages';
import Menu from 'components/Menu';

class App extends Component {
  
  render(){
    return (
      <div className="body">
        <Menu className="menu"/>
        <div className="contents">
          <Route path="/about" component={About}/>
          <Route exact path="/" component={Dashboard}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route className="lecture" path="/lecture/:id" component={Lecture}/>
        </div>
      </div>
    )
  }
}

export default App;