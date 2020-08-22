import React, { Component } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";

const key = "";

class App extends Component {
  state = {
    images: [],
    error: false,
  };
  handleGetRequest = async (e) => {
    e.preventDefault();

    const searchQuery = e.target.elements.searchQuery.value;

    const url = `https://pixabay.com/api/?key=${key}&q=${searchQuery}&image_type=photo&pretty=true`;

    const request = await fetch(url);

    const response = await request.json();

    if (!searchQuery) {
      this.setState({ error: true });
    } else {
      this.setState({ images: response.hits, error: false });
    }
  };

  render() {
    const { images, error } = this.state;
    return (
      <div className="App">
        <SearchForm handleGetRequest={this.handleGetRequest} />
        {}

        {error ? (
          <div>Please enter a search query</div>
        ) : (
          <SearchResults images={images} />
        )}
      </div>
    );
  }
}

export default App;
