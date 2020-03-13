import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";

const DEFAULT_STATE = {
  title: "",
  year: "",
  director: "",
  summary: "",
  poster_image_url: ""
};

class MovieForm extends Component {
  constructor(props) {
    super(props);
    this.state = DEFAULT_STATE;
  }
  render() {
    const createOnChangeFunc = attributeName => {
      return event => {
        this.setState({
          [attributeName]: event.target.value
        });
      };
    };
    const onSubmit = e => {
      e.preventDefault();
      this.props.onSubmit(this.state).then(() => {
        this.setState(DEFAULT_STATE);
      });
    };
    return (
      <div>
        <p>Are we missing a movie?</p>
        <Col xs="4">
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="titleInput">Title (Required)</Label>
              <Input
                name="title"
                id="titleInput"
                value={this.state.title}
                required={true}
                onChange={createOnChangeFunc("title")}
              />
            </FormGroup>
            <FormGroup>
              <Label for="yearInput">Year of Release</Label>
              <Input
                value={this.state.year}
                onChange={createOnChangeFunc("year")}
                type="numeric"
                name="year"
                id="yearInput"
                placeholder="1999"
              />
            </FormGroup>
            <FormGroup>
              <Label for="posterInput">Poster Image URL</Label>
              <Input
                type="url"
                name="poster_image_url"
                value={this.state.poster_image_url}
                onChange={createOnChangeFunc("poster_image_url")}
                required={true}
                id="posterInput"
                placeholder="http://example.com/poster.jpg"
              />
            </FormGroup>
            <FormGroup>
              <Label for="directorInput">Director</Label>
              <Input
                name="title"
                id="directorInput"
                value={this.state.director}
                onChange={createOnChangeFunc("director")}
              />
            </FormGroup>
            <FormGroup>
              <Label for="summaryInput">Summary</Label>
              <Input
                type="textarea"
                name="summary"
                id="summaryInput"
                value={this.state.summary}
                onChange={createOnChangeFunc("summary")}
              />
            </FormGroup>
            <Button color="success">Add it!</Button>
          </Form>
        </Col>
      </div>
    );
  }
}

export default MovieForm;
