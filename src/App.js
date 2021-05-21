import React, { useState, useEffect } from "react";
import homePage from './home'
import pizzaForm from './pissaForm'
import Nav from './nav'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import * as yup from 'yup'
import formSchema from './formSchema'
import axios from 'axios'

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
    </>
  );
};
export default App;







