import React, { Component } from 'react';
import { BarLoader } from 'react-spinners';
import { Link } from 'react-router-dom';

import Content from './Content';

let timeOut;

export default class Main extends Component {
  state = {
    delayed: false,
    showLastRead: true,
    lastRead: localStorage.lastRead ? localStorage.lastRead.split('-') : null
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
    const {data: {basics, advance, es6, dom, daily, algods, soft}} = this.props;
    const { delayed, lastRead, showLastRead } = this.state;
    const delayMsg = <span>I have got a bad server... If your internet connection is not slow, please reload</span>;

    return (
      <section className="content-area">
        { lastRead && showLastRead && <section className="last-read">
          <div>
          <p>আপনি এখানে পড়ছিলেন হয়তোঃ</p>
          <Link to={`/${lastRead[1]}/${lastRead[0]}`}>{lastRead[2]}</Link>
          <span onClick={() => this.setState({showLastRead:false})}>বন্ধ করুন</span>
          </div>
        </section>}
        {basics.length > 0 ? <Content title="ব্যাসিক" data={basics} color="#F0DB4F" topic="basic" /> : <div className="loading-bar"><BarLoader color={'#F0DB4F'} />{delayed ? delayMsg : ''}</div>}
        {advance.length > 0 ? <Content title="অ্যাডভান্স" data={advance} color="#F44336" topic="advance" /> : <div className="loading-bar"><BarLoader color={'#F44336'} />{delayed ? delayMsg : ''}</div>}
        {es6.length > 0 ? <Content title="ইএস৬" data={es6} color="#BDBDBD" topic="es6" /> : <div className="loading-bar"><BarLoader color={'#BDBDBD'} />{delayed ? delayMsg : ''}</div>}
        {dom.length > 0 ? <Content title="ডম ম্যানিপুলেশন" data={dom} color="#FFC107" topic="dom" /> : <div className="loading-bar"><BarLoader color={'#FFC107'} />{delayed ? delayMsg : ''}</div>}
        {daily.length > 0 ? <Content title="নিত্যদিনের ব্যবহার" data={daily} color="#4CAF50" topic="daily" /> : <div className="loading-bar"><BarLoader color={'#4CAF50'} />{delayed ? delayMsg : ''}</div>}
        {algods.length > 0 ? <Content title="অ্যালগরিদম ও ডাটা স্ট্রাকচার" data={algods} color="#315950" topic="algods" /> : <div className="loading-bar"><BarLoader color={'#315950'} />{delayed ? delayMsg : ''}</div>}
        {soft.length > 0 ? <Content title="সফট স্কিল" data={soft} color="#000" topic="soft" /> : <div className="loading-bar"><BarLoader color={'#000'} />{delayed ? delayMsg : ''}</div>}
      </section>
    )
  }
}
