import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./styles/MainNavStyles.css";

//bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DropdownButton from "react-bootstrap/DropdownButton";

const MainNavBar = () => {
    const hamburgerIcon = <FontAwesomeIcon color="grey " icon={faBars} />;
    return (
        <Container id="main-nav-bar">
            <Row>
                <Col>
                    <DropdownButton
                        disabled
                        id="dropdown-basic-button"
                        title="Browse Category"
                    ></DropdownButton>
                </Col>
                <Col xs={6} style={{ textAlign: "center" }}>
                    read
                    <p className="title-books">books</p>
                </Col>
                <Col style={{ textAlign: "right" }}>
                    <span style={{ position: "absolute" }}>
                        <img
                            src="./avatar2.jpg"
                            width="20px"
                            className="online-avatar"
                        />
                        <span class="dot"></span>
                    </span>
                    <span className="main-nav-hamburger">{hamburgerIcon}</span>
                    <span className="main-nav-link">
                        <p>Menu</p>
                    </span>
                </Col>
            </Row>
        </Container>
    );
};

export default MainNavBar;
