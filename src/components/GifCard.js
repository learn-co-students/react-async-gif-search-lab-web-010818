import React from "react"

class GifCard extends React.Component{
  render(){
    const gifId = this.props.id
    return(
      <div>
        <img alt="" src={"https://media.giphy.com/media/"+gifId+"/giphy.gif"} style={{width: 200, height: 200}}></img>
      </div>
    )
  }

}

export default GifCard;
