import React from 'react';
import './App.css';

import Footer from './components/footer';
import Header from './components/header';
import Content from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Switch,Route,BrowserRouter} from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar bg="primary" variant="dark">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">read</Nav.Link>
              <Nav.Link href="/create">create</Nav.Link>
            </Nav>
          </Navbar>

          <Switch>
            <Route exact path="/" component={Header} />
            <Route path="/create" component={Footer} />
            <Route path="/read" component={Content} />

          </Switch>
        </div>
      </BrowserRouter>


    );
  }

}

export default App;
