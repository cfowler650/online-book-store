import React from "react";

//bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MainNavBar = () => {
    return (
        <Container id="main-nav-bar">
            <Row>
                <Col>Browse Category</Col>
                <Col xs={6} style={{ textAlign: "center" }}>
                    readBooks
                </Col>
                <Col style={{ textAlign: "right" }}>Menu</Col>
            </Row>
        </Container>
    );
};

export default MainNavBar;
