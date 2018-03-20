import React from 'react'

const GifList = (props) => {

  return (
    <ul>
      {props.gifs.length > 0 ? (
        props.gifs.map(gif => {
          return (
            <li>
              <img src={gif.images.fixed_height_small.url} alt={gif.slug}/>
            </li>
          )
        })
      ): <li>No gifs yet</li>}
    </ul>
  )
}

export default GifList
