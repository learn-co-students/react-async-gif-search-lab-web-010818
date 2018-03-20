import React, { Component } from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends Component {

  state = {
    gifs: [],
    searchTerm: "",
  }

  fetchGifs = () => {
    let searchURL = `http://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=dc6zaTOxFJmzC`
    console.log(searchURL, this.state);
    fetch(searchURL)
      .then(res => res.json())
      .then(json => this.setState({ gifs: json.data }, ()=> console.log(this.state)))
  }

  search = (searchTerm) => {
    this.setState({ searchTerm: searchTerm },() => this.fetchGifs())

  }

  render() {
    return (
      <div>
        <GifSearch search={this.search}/>
        <GifList gifs={this.state.gifs}/>
      </div>
    )
  }
}
