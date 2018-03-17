import React from 'react'

export default class GifSearch extends React.Component {
  constructor() {
    super();
    this.state={
      search: ''
    }
  }

  handleInput = (e) => {
    this.setState({ search: e.target.value})
  }

  onSearch = (e) => {
    e.preventDefault()
    this.props.handleSearch(this.state.search)
    this.setState({ search: '' })
  }

  render() {
    return(
      <nav className="navbar navbar-inverse">
        <form className="form-inline" onSubmit={this.onSearch}>
          <input onChange={this.handleInput}
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={this.state.search}
            />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit">Search
          </button>
        </form>
      </nav>
    )
  }
}
