import React, { Component } from "react";
import {
  Button,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col
} from "reactstrap";

class Movie extends Component {
  handleDelete() {
    // TODO implement so this actually deletes the movie
    // in the database and updates the UI
    alert(`Delete called for Movie ID ${this.props.id}`);
  }
  render() {
    const { title, year, director, poster_image_url, summary } = this.props;
    return (
      <Col xs="4">
        <Card>
          <CardImg top className="moviePoster" src={poster_image_url} />
          <CardBody>
            <CardTitle>
              {title} ({year})
            </CardTitle>
            <CardSubtitle>{director}</CardSubtitle>
            <CardText>{summary || "No summary."}</CardText>
            <Button onClick={this.handleDelete.bind(this)}>Delete</Button>
          </CardBody>
        </Card>
      </Col>
    );
  }
}
export default Movie;
