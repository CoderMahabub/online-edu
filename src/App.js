import './App.css';
import React from "react";
import Header from './components/Header/Header';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import ContactUs from './components/ContactUs/ContactUs';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>

        <Route exact path="/">
          <Banner></Banner>
        </Route>
        <Route path="/home">
          <Banner></Banner>
        </Route>
        <Switch>
          <Route path="/contact">
            <ContactUs></ContactUs>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
