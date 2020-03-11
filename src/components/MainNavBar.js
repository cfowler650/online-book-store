import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './styles/MainNavStyles.css'

//bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DropdownButton from "react-bootstrap/DropdownButton"




const MainNavBar = () => {
  const element = <FontAwesomeIcon color="grey " icon={faBars} />

  return (
    <Container id="main-nav-bar" style={{ padding: 20 }}>
      <Row>
        <Col>
          <DropdownButton disabled id="dropdown-basic-button" title="Browse Category">
          </DropdownButton>
        </Col>
        <Col xs={6} style={{ textAlign: "center" }}>
            read<p style={{ display: 'inline', fontWeight: "bold" }}>books</p>
        </Col>

        <Col style={{ textAlign: "right" }}>
          <span className='main-nav-hamburger'>
            {element}
          </span>
          <span className='main-nav-link'>
            <p style={{ display: "inline" }}>Menu</p>
          </span>

        </Col>
      </Row>
    </Container >
  );
};

export default MainNavBar;
