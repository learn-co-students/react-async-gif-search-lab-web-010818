import React from 'react';

class GifList extends React.Component {

  render() {
    const gifs = this.props.gifs.map(gif => {
      return <li key={gif.slug}><img src={gif.images.fixed_width.url} alt={gif.slug}></img></li>
    })
    return(
      <div>
        <ul>
          {gifs}
        </ul>
      </div>)
  }

}

export default GifList
