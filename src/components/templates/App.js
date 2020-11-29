import React from 'react';
import { Route } from 'react-router-dom';
import Nav from '../organisms/Nav';
import Footer from '../organisms/Footer';
import Home from './Home';
import About from './About';
import './App.css';
// todo: clean lineendings
const App = () => (
  <>
    <header>
      <Nav />
    </header>

    <main>
      <Route
        exact
        path="/"
        component={Home}
      />
      <Route
        path="/about"
        component={About}
      />
    </main>

    <Footer />
  </>
);

export default App;
