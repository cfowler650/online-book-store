import React from "react";

//bootstrap components
import Container from "react-bootstrap/Container";
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";

const books = [
  'Act Like It',
  'Alone on the Wall',
  'The Painters Daughter',
  'Dark Murder',
  'Alex Furgonson',
  'The Devils Playground'
]

const BookCard = ({ title }) => {
  return (
    <Card style={{ marginBottom: "4rem" }}>
      <Card.Body style={{ display: "flex" }}>
        <div>
          <img style={{
            position: "absolute",
            top: "-20px",
            left: "20px",
            height: "145px"
          }} src="https://source.unsplash.com/random/145x220" />
        </div>

        <div style={{ paddingLeft: '35%' }}>
          <Card.Title style={{ fontSize: "16px", color: "rgba(0, 0, 0, 0.76)" }} >{title}</Card.Title>
          <Card.Text style={{ fontSize: "12px" }}>
            Nisi aute excepteur aliqua laborum. Elit voluptate dolore ut dolore. Enim ut nostrud non in proident consectetur eu voluptate commodo. Amet consectetur do voluptate do mollit quis.
            </Card.Text>
        </div>
      </Card.Body>
    </Card >
  )
}

const BookCardList = () => {
  return (
    <Container style={{ maxWidth: '1000px' }}>
      <CardColumns style={{ columnCount: 2, gridColumnGap: '2.2rem' }}>
        {
          books.map(book => <BookCard title={book} />)
        }
      </CardColumns>
    </Container>

  )
};

export default BookCardList;
