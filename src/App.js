import React, { Component } from 'react';
import './App.css';
import {Route, Switch, Link, BrowserRouter as Router} from 'react-router-dom'
import Counter from './components/Counter';
import About from './components/About';
import Gallery from './components/Gallery';
import Home from './components/Home';
import images1 from './images/power-button.png'
import images2 from './images/haiti.jpg'
import images3 from './images/tools.jpg'
export default class App extends Component {


  render() 

        {
          return (
            
            <Router>
                <nav class="navbar navbar-expand nav-bar-brand m-2">
                  <ul className="navbar-nav">
                    <li><Link className="nav-link" to="/home">Home</Link> </li>
                    
                    <li><Link className="nav-link" to="/Counter">Counter</Link></li>
                    
                    <li> <Link className="nav-link" to="/about">About</Link></li>
                   
                    <li> <Link className="nav-link" to="/Gallery">Gallery</Link></li>
                  
                    </ul>
                </nav>
                <div>
                    <div className="container">
                      <Switch>
                        <Route path="/home" compenent={Home} exact  ></Route>
                        <Route path="/counter" compenent={Counter}exact  ></Route>
                        <Route path="/about" compenent={About}exact  ></Route>
                        <Route path="/gallery" compenent={Gallery} exact  ></Route>
                      </Switch>
                    </div>
                </div>
            </Router>
         
            // <div className="App">
            //   <Counter title="Counter " value={1} image={images1} />
            //   <Counter title="Counter " value={2} image={images2} />
            //   <Counter title="Counter " value={3} image={images3} />
            // </div>
          );
        }
}

