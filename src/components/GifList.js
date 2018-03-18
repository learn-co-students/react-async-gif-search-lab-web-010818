import React from "react"
import GifCard from "./GifCard"

class GifList  extends React.Component{
  render(){
   // const gifs = this.props.newGifs.map(g => <GifCard id={g.id} key={g.id}/>)
   const gifs = this.props.newGifs.map(g => <GifCard id={g.id} key={g.id}/>)

    return(
      <div>
        {gifs.slice(0, 3)}
      </div>
    )
  }

}


export default GifList
