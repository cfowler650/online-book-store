import React from "react";
import "./styles/GenreNavBar.css";
import { genreTags } from "./data";

//bootstrap components
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";

const generateLinks = () =>
    genreTags.map(genre => {
        return (
            <Nav.Item>
                <Nav.Link className="nav-link-override">{genre}</Nav.Link>
            </Nav.Item>
        );
    });

const GenreNavBar = () => {
    return (
        <Container style={{ marginBottom: 40 }}>
            <Row className="genre-nav-bar-row">
                <Col xs={3}>
                    <p>Popular by Genre</p>
                </Col>
                <Col xs={9}>
                    <Nav className="justify-content-end">{generateLinks()}</Nav>
                </Col>
            </Row>
        </Container>
    );
};

export default GenreNavBar;
