import React from 'react'

class GifSearch extends React.Component {
  state = {
    input:''
  }

  handleChange = (event) => {
    this.setState({
      input:event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.handleSubmit(this.state.input)
    this.setState({
      input:''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" value={this.state.input} onChange={this.handleChange}></input>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    )
  }
}

export default GifSearch
