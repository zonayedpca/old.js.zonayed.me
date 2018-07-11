import React from 'react';
import { Link } from 'react-router-dom';

import { createMarkup, toTop } from '../helper';

export default({location: {state: {data}}}) => {
  toTop();
  return (
    <div className="single-content">
      <Link to="/" className="button">হোম</Link>
      <h1 className="title" dangerouslySetInnerHTML={createMarkup(data.title.rendered)} />
      <div className="post">
        <span dangerouslySetInnerHTML={createMarkup(data.content.rendered)}/>
        <p>আমার এই লেখা পূর্বে <a rel="noopener noreferrer" target="_blank" href={`${data.link}`}>আমার ব্লগে</a> প্রকাশিত হয়েছে। চাইলে <a rel="noopener noreferrer" target="_blank" href="https://with.zonayed.me/bn">আমার ব্লগ</a> থেকে ঘুরে আসতে পারেন। ব্লগ থেকে <a rel="noopener noreferrer" target="_blank" href="https://with.zonayed.me/bn/%E0%A6%B8%E0%A6%BE%E0%A6%AC%E0%A6%B8%E0%A7%8D%E0%A6%95%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%87%E0%A6%AC-%E0%A6%95%E0%A6%B0%E0%A7%81%E0%A6%A8/">সাবস্ক্রাইব</a> করলে আমি নিজে থেকেই আমার নতুন লেখাগুলো আপনার ইমেইলে প্রতি শুক্রবার সকালে পাঠিয়ে দিবো। ভালো থাকবেন। হ্যাপী প্রোগ্রামিং!</p>
      </div>
    </div>
  )
}
