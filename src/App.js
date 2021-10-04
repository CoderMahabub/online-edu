import './App.css';
import Header from './components/Header/Header';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import ContactUs from './components/ContactUs/ContactUs';
import FeaturedCourses from './components/FeaturedCourses/FeaturedCourses';
import Courses from './components/Courses/Courses';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Banner></Banner>
            <FeaturedCourses></FeaturedCourses>
          </Route>
          <Route path="/home">
            <Banner></Banner>
            <FeaturedCourses></FeaturedCourses>
          </Route>
          <Route path="/courses">
            <Courses></Courses>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <ContactUs></ContactUs>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
