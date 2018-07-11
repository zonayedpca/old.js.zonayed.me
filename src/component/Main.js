import React, { Component } from 'react';
import { BarLoader } from 'react-spinners';

import Content from './Content';

let timeOut;

export default class Main extends Component {
  state = {
    delayed: false
  }

  componentDidMount() {
    timeOut = setTimeout(() => {
      this.setState({delayed: true});
    }, 20000);
  }

  componentWillUnmount() {
    clearTimeout(timeOut);
  }

  render() {
    const {data: {basics, advance, es6, daily, soft}} = this.props;
    const { delayed } = this.state;
    const delayMsg = <span>I've got a bad server... If your internet connection is not slow, please reload</span>;

    return (
      <section className="content-area">
        {basics.length > 0 ? <Content title="JavaScript Basics" data={basics} color="#F0DB4F" topic="js-basic" /> : <div className="loading-bar"><BarLoader color={'#F0DB4F'} />{delayed ? delayMsg : ''}</div>}
        {advance.length > 0 ? <Content title="JavaScript Advance" data={advance} color="#F44336" topic="js-advance" /> : <div className="loading-bar"><BarLoader color={'#F44336'} />{delayed ? delayMsg : ''}</div>}
        {es6.length > 0 ? <Content title="JavaScript ES6" data={es6} color="#BDBDBD" topic="js-es6" /> : <div className="loading-bar"><BarLoader color={'#BDBDBD'} />{delayed ? delayMsg : ''}</div>}
        {daily.length > 0 ? <Content title="Daily JavaScript" data={daily} color="#4CAF50" topic="js-daily" /> : <div className="loading-bar"><BarLoader color={'#4CAF50'} />{delayed ? delayMsg : ''}</div>}
        {soft.length > 0 ? <Content title="JavaScript Soft Skills" data={soft} color="#000" topic="js-soft" /> : <div className="loading-bar"><BarLoader color={'#000'} />{delayed ? delayMsg : ''}</div>}
      </section>
    )
  }
}
