import React, {Component} from 'react';

export default class GifSearch extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <label>Enter a Search Term:
          <input type="text" onChange={this.props.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
