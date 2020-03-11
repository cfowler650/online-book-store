import React from "react";

//bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//components

import SideBar from "../components/SideBar";
import GenreNavBar from "../components/GenreNavBar";
import BookCardList from "../components/BookCardList";

const BottomSection = () => {
  return (
    <Container id="bottom-section" fluid>
      <Row>
        <Container className="noPadding">
          <Row>
            <Col xs={3}>
              <SideBar />
            </Col>
            <Col xs={9}>
              <Container>
                <Row>
                  <GenreNavBar />
                </Row>
                <Row>
                  <BookCardList />
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  );
};

export default BottomSection;
