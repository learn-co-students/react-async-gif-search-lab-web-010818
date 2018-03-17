import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
  state = {gifs: [], searchTerm: 'search'}

  componentDidMount() {
    this.fetchGifs(this.state.searchTerm)
  }

  fetchGifs = (queryTerm) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${queryTerm}&api_key=dc6zaTOxFJmzC`)
    .then(res => res.json())
    .then(json => this.setState({ gifs: json.data.slice(0, 10) }))
  }

  onChange = (e) => {
    this.setState({ searchTerm: e.target.value});
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.fetchGifs(this.state.searchTerm);
  }

  render() {
    return (
      <div className="container">
        <GifSearch handleSubmit={this.onSubmit} handleChange={this.onChange} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}
