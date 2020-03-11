import React from "react";
import './styles/SideBarStyles.css';

//bootstrap components
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

const authorsData = [
  {name: 'Sebastian Jeremy', image: './avatar1.jpg'},
  {name: 'Johnathen Doe', image: './avatar2.jpg'},
  {name: 'Angeline Summer', image: './avatar3.jpg'},
  {name: 'Noah Jones', image: './avatar5.jpg'},
  {name: 'Irene Cassandra', image: './avatar8.jpg'}
]

const booksData = [
  {name: 'Big Magic: Creative Living Beyond Fear', image: './fourdays.jpg', author: 'John Cusask'},
  {name: 'Big Magic: Creative Living Beyond Fear', image: './darkmurder.jpg',  author: 'John Cusask'},
  {name: 'Big Magic: Creative Living Beyond Fear', image: './inconceivable.jpg',  author: 'John Cusask'},
  {name: 'Big Magic: Creative Living Beyond Fear', image: './thedevilsplayground.jpg',  author: 'John Cusask'},
  {name: 'Big Magic: Creative Living Beyond Fear', image: './thepaintersdaughter.jpg',  author: 'John Cusask'}
]

const SideBarListItemAuthor = ({item, image}) => {
  return (
    <Container className="noPadding" style={{ marginBottom: '0.8rem' }}>
      <div className="container-test">
        <Image className="side-bar-image" src={image} roundedCircle  />
        <div style={{ paddingLeft: "1rem", fontSize: "12px", display: "inline" }}>{item}</div>
      </div>
    </Container>
  )
}

const SideBarListItemBook = ({item, image, author}) => {
  return (
    <Container className="noPadding" style={{ marginBottom: '0.8rem' }}>
      <div className="list-item-flexbox">
        <Image style={{height: 80}}className="side-bar-image" src={image}   />
        <div className="list-item-contents">
          <div style={{fontSize: "12px", display: "inline" }}>{item}</div>
          <p className="list-item-book-author">by {author}</p>
        </div>
      </div>
    </Container>
  )
}

const SideBarList = ({ title, data }) => {
  let generateList = ''
  title === 'Author of the week'
   ? generateList = () =>
      data.map(item => {
        return (
          <SideBarListItemAuthor item={item.name} image={item.image} />
        )
      })
  :  generateList = () =>
     data.map(item => {
      return (
        <SideBarListItemBook item={item.name} image={item.image} author={item.author} />
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
      <SideBarList title="Author of the week" data={authorsData}  />
      <SideBarList title="Books of the year" data={booksData}  />
    </Container>
  );
};

export default SideBar;
