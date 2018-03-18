import React from "react"

class GifSearch extends React.Component{

  render(){
    return(
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <input type="text" onChange={this.props.handleChange} value={this.props.search}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default GifSearch
