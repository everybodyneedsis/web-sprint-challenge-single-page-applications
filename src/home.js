import { BrowserRouter as Router, Route, Switch, Link, useRouteMatch } from 'react-router-dom'
import React from 'react';

export default function homePage(props) {
    const { url } = useRouteMatch()
  return (
    <div className = "mainContainer">
        <h1>Your favorite food, delivered while coding</h1>
        <Link to={`${url}pizzaForm`}><button id = "redirect">Pizza?</button></Link>
    </div>
  );
};