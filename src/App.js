 //import { Navbar } from 'react-bootstrap';
 import React, { Component } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import {Switch} from "react-router-dom"
import {BrowserRouter as  Router, Route } from "react-router-dom";
import News from './components/News';

 
 export default class App extends Component {
  // c = 'john'  document.title = "DailyNews"

  page = 12
   render() {
     return (
    
       <div>
        <Router>
         <Navbar/>
         <Switch>
         <Route exact path="/general"><News key="home" pageSize={this.page} category={"general"} /></Route>
         <Route exact path="/health"><News key="health" pageSize={this.page} category={"health"} /></Route>
         <Route exact path="/general"><News key="general" pageSize={this.page} category={"general"}/></Route>
         <Route exact path="/sports"><News key="health" pageSize={this.page} category={"sports"}/></Route>
         <Route exact path="/entertainment"><News key="entertainment" pageSize={this.page} category={"entertainment"}/></Route>
         <Route exact path="/science"><News key="science" pageSize={this.page} category={"science"}/></Route>
         <Route exact path="/technology"><News key="technology" pageSize={this.page} category={"technology"}/></Route>
         <Route exact path="/business"><News key="business" pageSize={this.page} category={"business"}/></Route>
         </Switch>
         </Router>
       </div>
     )
   }
 }
 