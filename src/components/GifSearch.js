import React from 'react'

const GifSearch = (props) => {

  return(
    <form onSubmit={props.onSubmit}>
      <input type="text" placeholder="Search Here" value={props.query} onChange={props.onChange}/>
      <input type="submit" value="search" />
    </form>
  )

}

export default GifSearch
