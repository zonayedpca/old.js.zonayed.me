import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import SingleContent from './component/SingleContent';

import './App.css';

export default class App extends Component {
  state = {
    basics: [],
    advance: [],
    es6: [],
    daily: [],
    soft: []
  }

  componentDidMount() {
    axios('https://with.zonayed.me/wp-json/wp/v2/posts?tags=164&order=asc&per_page=30').then(({data}) => this.setState({basics: data})).catch((err) => this.setState({basics: err}));
    axios('https://with.zonayed.me/wp-json/wp/v2/posts?tags=158&order=asc&per_page=30').then(({data}) => this.setState({advance: data})).catch((err) => this.setState({advance: err}));
    axios('https://with.zonayed.me/wp-json/wp/v2/posts?tags=150&order=asc&per_page=30').then(({data}) => this.setState({es6: data})).catch((err) => this.setState({es6: err}));
    axios('https://with.zonayed.me/wp-json/wp/v2/posts?tags=168&order=asc&per_page=30').then(({data}) => this.setState({daily: data})).catch((err) => this.setState({daily: err}));
    axios('https://with.zonayed.me/wp-json/wp/v2/posts?tags=166&order=asc&per_page=30').then(({data}) => this.setState({soft: data})).catch((err) => this.setState({soft: err}));
  }

  componentWillUnmount() {
    clearTimeout();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={() => <Main data={this.state} />} />
          <Route exact path="/:topic/:id" render={(props) => <SingleContent {...props} />} />
          <Footer />
        </div>
      </Router>
    );
  }
}
