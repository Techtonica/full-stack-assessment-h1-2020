import React, { Component } from "react";
import "./App.css";
import { fetchMovies, addMovie } from "./tmdb-api-client";
import { Spinner, Jumbotron } from "reactstrap";
import MovieList from "./components/MovieList";
import MovieForm from "./components/MovieForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: null
    };
  }
  componentDidMount() {
    return fetchMovies().then(movies => {
      this.setState({ movies });
    });
  }
  render() {
    const submitMovieForm = movie => {
      return addMovie(movie).then(savedMovie => {
        this.setState({ movies: this.state.movies.concat(savedMovie) });
      });
    };
    if (!this.state.movies) {
      return <Spinner color="primary" />;
    }
    return (
      <div className="App">
        <MovieList movies={this.state.movies} />

        <Jumbotron>
          <h1 className="display-3">
            <i>The</i> app for movie fans.
          </h1>
          <p className="lead">
            This is a simple hero unit, a simple Jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <p>
            For more components, see{" "}
            <a href="https://reactstrap.github.io/components/">reactstrap</a>.
          </p>
          <MovieForm onSubmit={submitMovieForm} />
        </Jumbotron>
      </div>
    );
  }
}

export default App;
