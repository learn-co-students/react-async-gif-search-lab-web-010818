import React from "react"
import GifList from "../components/GifList"
import GifSearch from "../components/GifSearch"

class GifListContainer extends React.Component{

  state={
    gifs: [],
    search: ""
  }

  fetchData(search){
    fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC`)
    .then(resp => resp.json())
    .then(gifs => this.setState({
      gifs: gifs.data,
      search: ""
    }))
   // .then(gifs => console.log(gifs.data))
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.fetchData(this.state.search)
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value
    })
    console.log(event.target.value)
  }

  render(){
    return(
      <div>
        < GifSearch search={this.state.search} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        < GifList newGifs={this.state.gifs} />
      </div>
    )
  }
}

export default GifListContainer
