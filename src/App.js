import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
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
    dom: [],
    daily: [],
    algods: [],
    soft: []
  }

  componentDidMount() {
    axios('//with.zonayed.me/wp-json/wp/v2/posts?tags=164&order=asc&per_page=30&fields=id,title').then(({data}) => this.setState({basics: data}));
    axios('//with.zonayed.me/wp-json/wp/v2/posts?tags=158&order=asc&per_page=30&fields=id,title').then(({data}) => this.setState({advance: data}));
    axios('//with.zonayed.me/wp-json/wp/v2/posts?tags=150&order=asc&per_page=30&fields=id,title').then(({data}) => this.setState({es6: data}));
    axios('//with.zonayed.me/wp-json/wp/v2/posts?tags=194&order=asc&per_page=30&fields=id,title').then(({data}) => this.setState({dom: data}));
    axios('//with.zonayed.me/wp-json/wp/v2/posts?tags=168&order=asc&per_page=30&fields=id,title').then(({data}) => this.setState({daily: data}));
    axios('//with.zonayed.me/wp-json/wp/v2/posts?tags=200&order=asc&per_page=30&fields=id,title').then(({data}) => this.setState({algods: data}));
    axios('//with.zonayed.me/wp-json/wp/v2/posts?tags=166&order=asc&per_page=30&fields=id,title').then(({data}) => this.setState({soft: data}));
  }

  componentWillUnmount() {
    clearTimeout();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route exact path="/" render={() => <Main data={this.state} />} />
          <Route exact path="/:topic/:id" render={(props) => <SingleContent {...props} />} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
