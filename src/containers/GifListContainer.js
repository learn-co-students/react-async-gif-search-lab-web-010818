import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'
export default class GifListContainer extends React.Component {

  state={
    gifs: [],
    query: ''
  }


  getGifs = () => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=dc6zaTOxFJmzC`)
      .then(res => res.json())
      .then(json => {
        this.setState({query: '', gifs: [...json.data.slice(0, 3)]})
      })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.getGifs()
  }

  handleChange = (e) => {
    this.setState({query: e.target.value})
  }

  //if you map, remember to return
  renderGifs = () => {
    return this.state.gifs.map((gif) => <GifList gif={gif} />)
  }

  render() {
    console.log(this.state);;
    return (
      <div>
        <GifSearch query={this.state.query} onSubmit={this.handleSubmit} onChange={this.handleChange}/>
        <ul>{this.renderGifs()}</ul>
      </div>
    )
  }
}
