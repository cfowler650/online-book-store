import React from "react";

//bootstrap components
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";

const genreTags = [
  "All Genres",
  "Business",
  "Science",
  "Fiction",
  "Philosophy"
];

const generateLinks = () =>
  genreTags.map(genre => {
    return (
      <Nav.Item>
        <Nav.Link style={{ paddingTop: 0, paddingBottom: 0 }}>
          {genre}
        </Nav.Link>
      </Nav.Item>
    );
  });

const GenreNavBar = () => {
  return (
    <Container>
      <Row>
        <Col xs={3}>
          <p>Popular by genre</p>
        </Col>
        <Col xs={9}>
          <Nav className="justify-content-end">{generateLinks()}</Nav>
        </Col>
      </Row>
    </Container>
  );
};

export default GenreNavBar;
