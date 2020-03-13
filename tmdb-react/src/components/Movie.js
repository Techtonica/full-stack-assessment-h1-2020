import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col
} from "reactstrap";

const Movie = ({ title, year, director, poster_image_url, summary }) => {
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
        </CardBody>
      </Card>
    </Col>
  );
};

export default Movie;
