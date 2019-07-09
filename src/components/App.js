import React, { Component } from 'react';
import { Route, Switch } from "react-router";

// Core
import Header from './Header';
import Footer from './Footer';
import './styles/core.scss';

// Components
import ElementList from './ElementList';
import ElementCreate from './ElementCreate';
import ElementDetail from './ElementDetail';

class App extends Component {
  render(){
    return (
      <div className="bm">
        <Header />
        <Switch>
          <Route exact path="/" component={ElementList} />
          <Route path="/elements/new" component={ElementCreate} />
          <Route path="/elements/:id" component={ElementDetail} />
          <Route component={ElementList} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;