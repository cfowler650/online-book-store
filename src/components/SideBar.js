import React from "react";
import "./styles/SideBarStyles.css";
import { authorsData, booksData } from "./data";

//bootstrap components
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

const SideBarListItemAuthor = ({ author, image }) => {
    return (
        <Container className="noPadding" style={{ marginBottom: "0.8rem" }}>
            <div className="container-test">
                <Image className="side-bar-image" src={image} roundedCircle />
                <div className="side-bar-list-author">{author}</div>
            </div>
        </Container>
    );
};

const SideBarListItemBook = ({ book, image, author }) => {
    return (
        <Container className="noPadding" style={{ marginBottom: "0.8rem" }}>
            <div className="list-item-flexbox">
                <Image
                    style={{ height: 80 }}
                    className="side-bar-image"
                    src={image}
                />
                <div className="list-item-contents">
                    <div className="side-bar-list-book">{book}</div>
                    <p className="list-item-book-author">by {author}</p>
                </div>
            </div>
        </Container>
    );
};

const SideBarList = ({ title, data }) => {
    let generateList = "";
    title === "Author of the week"
        ? (generateList = () =>
              data.map(item => {
                  return (
                      <SideBarListItemAuthor
                          author={item.name}
                          image={item.image}
                      />
                  );
              }))
        : (generateList = () =>
              data.map(item => {
                  return (
                      <SideBarListItemBook
                          book={item.name}
                          image={item.image}
                          author={item.author}
                      />
                  );
              }));

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
    );
};

const SideBar = () => {
    return (
        <Container>
            <SideBarList title="Author of the week" data={authorsData} />
            <SideBarList title="Books of the year" data={booksData} />
        </Container>
    );
};

export default SideBar;
