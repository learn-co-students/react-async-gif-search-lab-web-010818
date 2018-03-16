import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
  state = {gifs: []}

  componentDidMount() {
    this.fetchGifs('cat')
  }

  fetchGifs = (queryTerm) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${queryTerm}&api_key=dc6zaTOxFJmzC`)
    .then(res => res.json())
    .then(json => this.setState({ gifs: json.data.slice(0, 10) }))
  }

  render() {
    return (
      <div>
        <GifList gifs={this.state.gifs}/>
        <GifSearch />
      </div>
    )
  }
}
