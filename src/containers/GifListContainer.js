import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

  state ={
    gifs: [],
    query: ''
  }

  fetchGifs = () => {
    const api_key = '6mPgtUROdtCM7cWCM3FFKuVZG7Lre9ji'
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=${api_key}&limit=3`)
      .then(res => res.json())
      .then(response => this.setState({gifs: response.data}))
  }


  updateSearchTerm = (query) => {
    this.setState({query: query}, this.fetchGifs)
  }

  render(){
    console.log(this.state)
    return (
      <div>
        < GifSearch search={this.updateSearchTerm}/>
        < GifList gifs={this.state.gifs} />
      </div>
    )

  }
}

export default GifListContainer
