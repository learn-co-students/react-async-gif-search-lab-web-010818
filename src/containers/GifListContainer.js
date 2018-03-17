import React from 'react'
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'
const URL1 = 'https://api.giphy.com/v1/gifs/search?api_key=7U850NiREV7w7ayJzMJqhedCW3swkqlc&q='
const URL2 = '&limit=3&offset=0&rating=G&lang=en'
//A container does data fetching and then renders its corresponding sub-component. That’s it.
//responsible for fetching the data from the giphy api, storing the first 3 gifs from the response in it's component state, and passing that data down to it's child the <GifList> component as a prop.

// It will also render a <GifSearch /> component that renders the form. <GifListContainer /> should pass down a submit handler function to <GifSearch /> as a prop.

export default class GifListContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      gifs: [],
      search: ''
    }
  }

  setSearch = (searchTerm) => {
    console.log("setting search term in container:", searchTerm)
    this.setState({ search: searchTerm}, () => this.fetchGifs())
  }

  fetchGifs() {
    fetch(URL1 + this.state.search + URL2)
      .then(res => res.json())
      .then(gifs => this.setState({ gifs: [...gifs.data] }))
  }

  render() {
    return(
      <div>
        <GifSearch handleSearch={(searchTerm) => this.setSearch(searchTerm)}/>
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}
