import React from 'react';

const GifSearch = (props) => {
  return (
    <div>
      <form onSubmit={props.onSubmit} >
        <label>Search Here</label>
        <input type="search" onChange={props.onChange} placeholder="Search..." />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )

}

export default GifSearch;
