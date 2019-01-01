import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import './App.css';
import Header from './Components/Header/Header.js'
import Footer from './Components/Footer/Footer.js'
import Home from './Components/Home/Home.js'
import Resume from './Components/Resume/Resume.js'
import Services from './Components/Services/Services.js'
import Contact from './Components/Contact/Contact.js'

class App extends Component {
  constructor(props, context) {
    super(props, context);
}
  render() {
    return (
      <div className="App">
      <BrowserRouter> 
      <div>
        <Header/>
        <ReactCSSTransitionGroup
                transitionName="transitionWrapper"
                component="div"
                className="transitionWrapper"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}>
        <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/resume" component={Resume} />
              <Route path="/services" component={Services} />
              <Route path="/contact" component={Contact} />
        </Switch>
        </ReactCSSTransitionGroup>
        <Footer/>
        </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;