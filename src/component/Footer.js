import React, { PureComponent } from 'react';

export default class Footer extends PureComponent {
  render() {
    return (
      <footer>
        <ul>
          <li>With <span className="love">❤</span> By Zonayed Ahmed</li>
          <li><a rel="noopener noreferrer" target="_blank" href="https://with.zonayed.me/bn">learn with zonayed</a></li>
        </ul>
      </footer>
    )
  }
}
