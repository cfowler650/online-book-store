import React from "react";

//bootstrap components
import Container from "react-bootstrap/Container";
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";

const books = [
  'Book 1',
  'Book 2',
  'Book 3',
  'Book 4',

]

const BookCard = ({ title }) => {
  return (
    <Card style={{ width: '22rem' }}>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title>This is the title for {title}</Card.Title>
        <Card.Text>
          Nisi aute excepteur aliqua laborum. Elit voluptate dolore ut dolore. Enim ut nostrud non in proident consectetur eu voluptate commodo. Amet consectetur do voluptate do mollit quis.
          </Card.Text>
      </Card.Body>
    </Card>
  )
}

const BookCardList = () => {
  return (
    <Container>
      <CardColumns style={{ columnGap: "23rem" }}>
        {
          books.map(book => <BookCard title={book} />)
        }
      </CardColumns>
    </Container>
  )
};

export default BookCardList;
