import React from 'react';

const GifList = (props) => {
  const gifListItems = props.gifs.map(gif => <li><img src={gif.images.fixed_height_small.url} /></li>)

  return (
    <div>
      <ul>
        {gifListItems}
      </ul>
    </div>
  )

}

export default GifList;
