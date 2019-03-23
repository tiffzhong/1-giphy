import React, { Component } from "react";
import "../App.scss";
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
      <div className="search-container">
        <input onChange={e => this.onInput(e.target.value)} />
        <button onClick={() => this.display(this.state.query)}>search</button>
      </div>
    );
  }
}

export default SearchBar;
