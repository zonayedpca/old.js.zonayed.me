import React from 'react';

import Card from './Card';

export default({title, data, topic, color}) => {
  const showData = data.map(singleData => <Card key={singleData.id} data={singleData} topic={topic} color={color} />)
  return (
    <div className="content">
      <h4>{title}</h4>
      <div className="row">
        {showData}
      </div>
    </div>
  )
}
