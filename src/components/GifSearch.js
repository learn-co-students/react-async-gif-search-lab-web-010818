import React, {Component} from 'react'

export default class GifSearch extends Component {

  state ={
    search: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.search(this.state.search)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="search" type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search Gify"/>
        <input type="submit"/>
      </form>
    )
  }
}
