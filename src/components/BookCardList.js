import React from "react";
import "./styles/BookCardList.css";
import { cardListBooks as books } from "./data";
import starGenerator from "./starGenerator";

//bootstrap components
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

const BookCard = ({ title, author, rating, image }) => {
    const bookTitle = title.length > 20 ? title.substr(0, 20) + "..." : title;
    return (
        <Card className="card-list-main">
            <Card.Body style={{ display: "flex" }}>
                <div>
                    <img className="book-card-image" src={image} />
                </div>

                <div className="book-info">
                    <Card.Title className="book-title">{bookTitle}</Card.Title>
                    <p className="card-author">by {author}</p>
                    <span>
                        {starGenerator(rating, "gold", "grey")}
                        <p className="book-card-reviews">1,000,000 reviews</p>
                    </span>
                    <Card.Text style={{ fontSize: "12px", color: "grey" }}>
                        Nisi aute excepteur aliqua laborum. Elit voluptate
                        dolore ut dolore. Enim ut nostrud non in proident
                        consectetur eu voluptate commodo.
                    </Card.Text>
                </div>
            </Card.Body>
            <div className="book-card-bottom-section">
                <Image
                    className="card-list-avatar-image"
                    src="https://source.unsplash.com/random/20x20"
                    roundedCircle
                />
                <span className="likes-container">
                    <p className="likes-name">Adam</p>
                    <p> and </p>
                    <p className="likes-name">Kimberly </p>
                    <p> like this </p>
                </span>
            </div>
        </Card>
    );
};

const BookCardList = () => {
    return (
        <Container style={{ maxWidth: "1000px" }}>
            <div className="grid-container-fix">
                {books.map(book => (
                    <BookCard
                        title={book.title}
                        author={book.author}
                        rating={book.rating}
                        image={book.image}
                    />
                ))}
            </div>
        </Container>
    );
};

export default BookCardList;
