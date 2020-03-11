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
  "Philosophy",
  "Biography"
];

const generateLinks = () =>
  genreTags.map(genre => {
    return (
      <Nav.Item>
        <Nav.Link style={{
          paddingTop: 0, paddingBottom: 0, fontSize: 14,
          fontWeight: 300, color: "rgba(0, 0, 0, 0.76)"
        }}>
          {genre}
        </Nav.Link>
      </Nav.Item>
    );
  });

const GenreNavBar = () => {
  return (
    <Container style={{ marginBottom: 40 }}>
      <Row style={{ marginBottom: 20, borderBottom: '1.2px solid #e2e2e2' }}>
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
