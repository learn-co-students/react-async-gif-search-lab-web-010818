import React, {Image} from 'react'

const GifList = props => {

  const gifs = props.gifs.map(gif => {
    return (
      <li key={gif.id}>
        <img src={gif.images.downsized_medium.url}></img>
      </li>
    )
  })

  return (
    <ul>
      {gifs}
    </ul>
  )
}

export default GifList
