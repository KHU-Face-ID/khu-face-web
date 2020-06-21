import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import { About, Dashboard, Lecture } from 'pages';
import Menu from 'components/Menu';

class App extends Component {
  
  render(){
    return (
      <div>
        <Menu/>
        <Fragment>
          <Route path="/about" component={About}/>
          <Route exact path="/" component={Dashboard}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/lecture/:id" component={Lecture}/>
        </Fragment>
      </div>
    )
  }
}

export default App;