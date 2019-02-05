import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App_compressed.css';
import Header from './Components/Header/Header.js'
import Footer from './Components/Footer/Footer.js'
import Home from './Components/Home/Home.js'
import Resume from './Components/Resume/Resume.js'
import Services from './Components/Services/Services.js'
import Contact from './Components/Contact/Contact.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  componentDidMount() {
    this.setState({
      loading: false
    });
  }
  render() {
    return (
      <div className="App">
        {this.state.loading ?
          <div className="loading">
            <div className="preloader-animation">
              <div id="preloader_1">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div> :
          <BrowserRouter>
            <div>
              <Header />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/resume" component={Resume} />
                <Route path="/services" component={Services} />
                <Route path="/contact" component={Contact} />
              </Switch>
              <Footer />
            </div>
          </BrowserRouter>}
      </div>
    );
  }
}
export default App;