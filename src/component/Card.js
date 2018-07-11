import React from 'react';
import { Link } from 'react-router-dom';

import { createMarkup } from '../helper';

export default({data, topic, color}) => {
  return (
    <div className="card" style={{borderColor: color}}>
      <Link to={{pathname: `/${topic}/${data.id}`, state: {data: data}}}>
        <span dangerouslySetInnerHTML={createMarkup(data.title.rendered)}/>;
      </Link>
    </div>
  )
}
