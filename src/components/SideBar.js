import React from "react";
import './styles/SideBarStyles.css';

//bootstrap components
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

const SideBarListItem = ({ item }) => {
  return (
    <Container className="noPadding" style={{ marginBottom: '0.8rem' }}>
      <Image style={{ boxShadow: 'rgb(170, 170, 170) 0px 3px 6px 0.5px' }} src="https://source.unsplash.com/random/20x20" roundedCircle />
      <span style={{ paddingLeft: "1rem", fontSize: "12px" }}>{item}</span>
    </Container>
  )
}

const SideBarList = ({ title, data }) => {
  const generateList = () =>
    data.map(item => {
      return (
        <SideBarListItem item={item} />
      )
    })

  return (
    <Row className="list-container">
      <Col>
        <Row>
          <Container className="noPadding">
            <p className="list-title">{title}</p>
            {generateList()}
          </Container>
        </Row>
      </Col>
    </Row>
  )
};

const SideBar = () => {
  return (
    <Container>
      <SideBarList title="Author of the week" data={['Sebastian Jeremy', 'Johnathen Doe', 'Angeline Summer']} />
      <SideBarList title="Books of the year" data={['Big Magic Creative', 'Harry Potter', 'Goblet of Fire']} />
    </Container>
  );
};

export default SideBar;
