import React, { useState, useEffect } from "react";
import homePage from './home'
import pizzaForm from './pizzaForm'
import Nav from './nav'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import * as yup from 'yup'
import formSchema from './formSchema'
import axios from 'axios'
import Help from './Help'

const App = () => {
  return (
    <>
    
      <div>
        <h1>Lambda Eats</h1>
      </div>

    <Router>
      <div>
        <nav>
          <ul>
              <Link to='./homePage'>Home</Link>
              <Link to='./Help'>Help</Link>
          </ul>
        </nav>

        <Switch>
          <Route path='./homePage'>
            <Home />
          </Route>
          <Route path='./Help'>
            <Help />
          </Route>
        </Switch>
      </div>
    </Router>

    </>
  );
};

function Home() {
  return <h2>Home</h2>;
}
// function Help() {
//   return <h2>Help</h2>;
// }

export default App;







