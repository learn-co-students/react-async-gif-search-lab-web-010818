import React from 'react'

// <GifList /> is a presentational component. It receives data from it's props and renders html given the input data. It can render a top level <ul> with each gif as an <li>.

const GifList = (props) => {
  console.log("GifList props:", props.gifs)
  if (props.gifs.length > 0)
    {
      console.log("GifList:", props.gifs[0].images.original.url)
    }
  return  <ul>
            {props.gifs.map((gif) => <li><img src={gif.images.original.url}/></li>)}
          </ul>
}

export default GifList;
