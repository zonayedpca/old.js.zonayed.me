import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BarLoader } from 'react-spinners';

import { createMarkup, toTop } from '../helper';

export default class SingleContent extends Component {
  state = {
    data: '',
    shouldUpdate: true
  }

  componentWillMount() {
    const { props: { match: { params: { id } } } } = this;
    axios(`https://with.zonayed.me/wp-json/wp/v2/posts/${id}`).then(({data}) => this.setState({data, shouldUpdate: false}));
    toTop();
  }

  shouldComponentUpdate() {
    const { state: { shouldUpdate }} = this;
    return shouldUpdate;
  }

  setLastRead = (id, topic, title) => {
    localStorage.setItem('lastRead', `${id}-${topic}-${title.rendered.replace('-', ' ')}`);
  }

  render() {
    const { state: { data } } = this;
    if(!data) return <div className="loading-bar"><BarLoader /></div>

    const { props: { match: { params: { topic, id } } } } = this;
    const { state: { data: { title, content, link } } } = this;
    this.setLastRead(id, topic, title);
    return (
      <div className="single-content">
        <Link to="/" className="button">হোম</Link>
        <h1 className="title" dangerouslySetInnerHTML={createMarkup(title.rendered)} />
        <div className="post">
          <span dangerouslySetInnerHTML={createMarkup(content.rendered)}/>
          <p>আমার এই লেখা পূর্বে <a rel="noopener noreferrer" target="_blank" href={`${link}`}>আমার ব্লগে</a> প্রকাশিত হয়েছে। চাইলে <a rel="noopener noreferrer" target="_blank" href="https://with.zonayed.me/bn">আমার ব্লগ</a> থেকে ঘুরে আসতে পারেন। ব্লগ থেকে <a rel="noopener noreferrer" target="_blank" href="https://with.zonayed.me/bn/%E0%A6%B8%E0%A6%BE%E0%A6%AC%E0%A6%B8%E0%A7%8D%E0%A6%95%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%87%E0%A6%AC-%E0%A6%95%E0%A6%B0%E0%A7%81%E0%A6%A8/">সাবস্ক্রাইব</a> করলে আমি নিজে থেকেই আমার নতুন লেখাগুলো আপনার ইমেইলে প্রতি শুক্রবার সকালে পাঠিয়ে দিবো। ভালো থাকবেন। হ্যাপী প্রোগ্রামিং!</p>
        </div>
      </div>
    )
  }
}
