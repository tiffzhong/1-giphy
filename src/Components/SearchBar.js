import React, { Component } from "react";

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      query: ""
    };
  }

  onInput = query => {
    this.setState({ query });
  };
  display = query => {
    this.props.onQueryChange(query);
  };
  render() {
    return (
      <div>
        <input
          placeholder="search a gif!"
          onChange={e => this.onInput(e.target.value)}
        />
        <button onClick={() => this.display(this.state.query)}>Search</button>
      </div>
    );
  }
}

export default SearchBar;
