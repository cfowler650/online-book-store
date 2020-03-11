import React from "react";

//bootstrap components
import Container from "react-bootstrap/Container";
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './styles/BookCardList.css'

let books = [
  { title: 'Attack of The Planet', image: './book1.jpg', author: 'John Winkleman', rating: 5 },
  { title: 'Book Title 2', image: './book1.jpg', author: 'John Winkleman', rating: 3 },
  { title: 'Book Title 3', image: './book1.jpg', author: 'John Winkleman', rating: 2 },
  { title: 'Book Title 4', image: './book1.jpg', author: 'John Winkleman', rating: 4 },
  { title: 'Book Title 5', image: './book1.jpg', author: 'John Winkleman', rating: 5 },
  { title: 'Book Title 6', image: './book1.jpg', author: 'John Winkleman', rating: 3 },
]


const starGenerator = (rating) => {
  let stars = [];

  let array = rating => {
    for (var i = 0; i < 5; i += 1) stars.push(i);
  };

  array(rating);

  return (
    <>
      {stars.map((star, index) => {
        return (
          index < rating
            ? <FontAwesomeIcon size={14} color="gold" icon={faStar} />
            : <FontAwesomeIcon size={14} color="grey" icon={faStar} />
        );
      })}
    </>
  );
};


const BookCard = ({ title, author, rating }) => {
  return (
    <Card style={{ marginBottom: "4rem", height: "240px" }}>
      <Card.Body style={{ display: "flex" }}>
        <div>
          <img className="book-card-image" src="https://source.unsplash.com/random/145x220" />
        </div>

        <div style={{ paddingLeft: '38%' }}>
          <Card.Title className="book-title" >{title}</Card.Title>
          <p className="card-author">by {author}</p>
          <span>
            {starGenerator(rating)}
            <p className="book-card-reviews">1,000,000 reviews</p></span>
          <Card.Text style={{ fontSize: "12px", color: "grey" }}>
            Nisi aute excepteur aliqua laborum. Elit voluptate dolore ut dolore. Enim ut nostrud non in proident consectetur eu voluptate commodo.
            </Card.Text>
        </div>

      </Card.Body>
      <div className="book-card-bottom-section">
        <Image style={{marginRight: "10px", boxShadow: 'rgb(170, 170, 170) 0px 3px 6px 0.5px' }} src="https://source.unsplash.com/random/20x20" roundedCircle />
        <p style={{ display: "inline", fontSize: 10 }}>Adam and Kimberly Like this</p>
      </div>
    </Card >
  )
}

const BookCardList = () => {
  return (
    <Container style={{ maxWidth: '1000px' }}>
      <CardColumns style={{ columnCount: 2, gridColumnGap: '2.2rem' }}>
        {
          books.map(book => <BookCard title={book.title} author={book.author} rating={book.rating} />)
        }
      </CardColumns>
    </Container>

  )
};

export default BookCardList;
