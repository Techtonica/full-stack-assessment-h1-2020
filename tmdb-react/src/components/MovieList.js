import React, { Component } from "react";
import { Alert, Row } from "reactstrap";
import Movie from "./Movie";

class MovieList extends Component {
  render() {
    if (!this.props.movies) {
      return <Alert color="warning">No movies found.</Alert>;
    }
    return (
      <Row>
        {this.props.movies.map(movie => (
          <Movie {...movie} />
        ))}
      </Row>
    );
  }
}

export default MovieList;
