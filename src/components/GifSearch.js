import React, {Image} from 'react'

class GifSearch extends React.Component {

  state = {
    value: ''
  }

  handleInputChange = (event) => {
    this.setState({value: event.target.value})
  }

  handleSearch = (event) => {
    event.preventDefault()
    this.props.search(this.state.value)
  }

 render(){
   return (
     <form onSubmit={this.handleSearch}>
       <input value={this.state.value} onChange={this.handleInputChange} type="text"/>
       <button>Search for Gifs! </button>
     </form>
   )
 }
}

export default GifSearch
