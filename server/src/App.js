import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home';
import Posts from './components/Pages/Posts';
import LogOut from './components/Pages/LogOut';
import Login from './components/Pages/Login';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={()=><Home authorized={false}/>} />
          <Route path='/products' exact component={Posts} />
          <Route path='/sign-up' exact component={LogOut} />
          <Route path='/Login' exact component={Login} />
        </Switch>
      </Router>
    </>

  );
}


export default App;