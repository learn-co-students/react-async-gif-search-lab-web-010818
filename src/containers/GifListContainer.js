import React from 'react';
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

const baseUrl = 'http://api.giphy.com/v1/gifs/search?q='
const apiKey = '&api_key=dc6zaTOxFJmzC'

class GifListContainer extends React.Component {
  state = {
    gifs:null
  }

  newSearch = (term) => {
    fetch(baseUrl+term+apiKey)
      .then(res => res.json())
      .then(json => {
        this.setState({
          gifs:json.data.slice(0,3)
        }
      )})
  }


  render() {
    return(
      <div>
        < GifSearch handleSubmit={this.newSearch} />
      {this.state.gifs ? < GifList gifs={this.state.gifs} /> : null}
      </div>
    )
  }
}

export default GifListContainer
