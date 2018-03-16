import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends React.Component {

  state = {
    searchTerm: '',
    gifs: []
  }

  fetchGifs = () => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=dc6zaTOxFJmzC`)
      .then(res => res.json())
      .then(json => this.setState({
        gifs: json.data.slice(0, 3)
      })
    )
  }

  componentDidMount() {

  }

  captureInput = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.fetchGifs();
  }

  render() {
    return (
      <div>
        < GifList gifs={this.state.gifs} />
        < GifSearch onChange={this.captureInput} onSubmit={this.handleSubmit} />
      </div>
    )
  }
}
