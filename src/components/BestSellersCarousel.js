import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./styles/BestSellersCarousel.css";
import { books, colors, carouselSliderSettings, Arrow } from "./data";
import starGenerator from "./starGenerator";

//bootstrap components
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";

const CarouselSlide = ({ thisIndex, title, image, author, rating }) => {
    let thisColor = colors[thisIndex];
    const bookTitle = title.length > 20 ? title.substr(0, 20) + "..." : title;
    const slideColor = { background: `linear-gradient(${thisColor})` };

    return (
        <Card style={{ border: "none", background: "inherit", width: "424px" }}>
            <Card.Body className="card-body-main">
                <div style={{ paddingLeft: "0" }}>
                    <div className="slide-div" style={slideColor}>
                        <img className="card-image" src={image} />
                        <div className="card-contents-container">
                            <Card.Title className="card-title-main">
                                <p className="slide-title">{bookTitle}</p>
                            </Card.Title>
                            <p className="slide-author">by {author}</p>
                            <span>
                                {starGenerator(
                                    rating,
                                    `rgb(220, 20, 60)`,
                                    `rgb(255, 192, 203)`
                                )}
                                <p className="slide-review">
                                    1,000,000 reviews
                                </p>
                            </span>
                            <Card.Text className="card-text-main">
                                Nisi aute excepteur aliqua laborum. Elit
                                voluptate dolore ut dolore. Enim ut nostrud non
                                in proident consectetur eu voluptate commodo.
                            </Card.Text>

                            <button className="slide-button">
                                See This Book
                            </button>
                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

const BestSellersCarousel = () => {
    const settings = carouselSliderSettings;
    return (
        <Container fluid className="jumbotron-container-main">
            <Jumbotron className="jumbotron-override">
                <Slider {...settings}>
                    {books.map((book, index) => {
                        return (
                            <div style={{ paddingRight: "10px" }}>
                                <CarouselSlide
                                    thisIndex={index}
                                    title={book.title}
                                    image={book.image}
                                    author={book.author}
                                    rating={book.rating}
                                />
                            </div>
                        );
                    })}
                </Slider>
            </Jumbotron>
        </Container>
    );
};

export default BestSellersCarousel;
