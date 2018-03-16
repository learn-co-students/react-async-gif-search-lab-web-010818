import React from 'react';
import uuid from 'uuid';

const GifList = props => {
  return (
    <div>
      {props.gifs.map (g => {
        return (
          <div className="card" key={uuid()}>
            <img src={g.images.fixed_width.url} alt={g.title} />
          </div>
        )
      })}
    </div>
  )
}

export default GifList
