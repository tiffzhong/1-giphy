import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import SearchBar from "./Components/SearchBar";
import GifList from "./Components/GifList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      gifs: []
    };
  }
  searchGifs = query => {
    axios
      .get(
        `http://api.giphy.com/v1/gifs/search?q=${query.replace(
          /\s/g,
          "+"
        )}&api_key=YUb2X8MJY7Cy4JobENoT0QLfrDQ509aS&limit=5`
      )
      .then(res => {
        this.setState({ gifs: res.data.data });
      });
  };

  render() {
    return (
      <div className="App">
        <SearchBar onQueryChange={this.searchGifs} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default App;
