import React from 'react';
import styled from 'styled-components';
import { Switch, Route, Link } from 'react-router-dom';

import About from './components/About';
import Projects from './components/Projects';

let NavLink = styled(Link)`
  color: black;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-decoration: none;
  margin: 10px;
  text-transform: uppercase;
`;

function App() {
  return (
    <>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/projects'>Projects</NavLink>
      <Switch>
        <Route exact path='/about'>
          <About></About>
        </Route>
        <Route exact path='/projects'>
          <Projects></Projects>
        </Route>
      </Switch>
    </>
  );
}

export default App;
