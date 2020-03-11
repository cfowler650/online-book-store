import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './styles/BestSellersCarousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

//bootstrap components
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", height: "100%", width: "100px" }}
      onClick={onClick}
    />
  );
}

let books = [
  { title: 'Harry Potter Order Of The Phoenix', image: './harrypotter.jpg', author: 'J.K. Rowling', rating: 5 },
  { title: 'Big Magic: Creative Living Beyond Fear', image: './bigmagic.jpg', author: 'Elizabeth Gilbert', rating: 3 },
  { title: 'Thousand Skies About You', image: './thousandskiesaboveyou.jpg', author: 'Claudia Gray', rating: 2 },
  { title: 'Book Title 4', image: './bigmagic.jpg', author: 'John Winkleman', rating: 4 },
  { title: 'Book Title 5', image: './bigmagic.jpg', author: 'John Winkleman', rating: 5 },
  { title: 'Book Title 6', image: './bigmagic.jpg', author: 'John Winkleman', rating: 3 },
]


let colors = [
  "salmon, pink",
  "salmon, orange",
  "salmon, crimson",
  "salmon, orange",
  "salmon, pink",
  "salmon, pink",
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
            ? <FontAwesomeIcon color="rgb(220,20,60)" icon={faStar} />
            : <FontAwesomeIcon color="rgb(255,192,203)" icon={faStar} />
        );
      })}
    </>
  );
};

const CarouselSlide = ({ thisIndex, title, image, author, rating }) => {

  let thisColor = colors[thisIndex]

  return (
    <Card style={{ border: 'none', background: 'inherit', width: "424px", }}>
      <Card.Body style={{ display: "flex", minHeight: "400px", padding: 0 }}>
        <div style={{ paddingLeft: '0' }}>
          <div style={{
            paddingLeft: '30%', background: `linear-gradient(${thisColor})`, minHeight: '72%'
          }}>

            <img style={{
              position: "absolute",
              top: "40px",
              left: "20px",
              width: "190px",
              height: "290px",
              boxShadow: 'rgba(0, 0, 0, 0.6) 0px 5px 20px 1px'
            }} src={image} />
            <div style={{
              fontSize: "12px", paddingLeft: 100,
              paddingRight: 20, paddingTop: "40px"
            }}>
              <Card.Title style={{ fontSize: "16px", marginBottom: 0 }}>
                <p className="slide-title">{title.length > 20 ? title.substr(0, 20) + '...' : title}</p>
              </Card.Title>
              <p className="slide-author">by {author}</p>
              <span>
                {starGenerator(rating)}
                <p className="slide-review">1,000,000 reviews</p></span>
              <Card.Text style={{ marginTop: "10px", color: "white" }}>
                Nisi aute excepteur aliqua laborum. Elit voluptate dolore ut dolore. Enim ut nostrud non in proident consectetur eu voluptate commodo.
             </Card.Text>

              <button className="slide-button" style={{ color: "salmon" }}>See This Book</button>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card >
  )
}



const BestSellersCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    nextArrow: <Arrow />
  };
  return (
    <Container fluid>
      <Jumbotron style={{ padding: 0, margin: 0, backgroundColor: 'inherit' }}>
        <Slider {...settings}>

          {books.map((book, index) => {
            return (
              <div style={{ paddingRight: "10px" }}>
                <CarouselSlide thisIndex={index} title={book.title} image={book.image} author={book.author} rating={book.rating} />
              </div>
            );
          })}



        </Slider>
      </Jumbotron>
    </Container >
  );
};

export default BestSellersCarousel;



// const CarouselSlide = () => {
//   return (
//     <div class="carousel-slide">
//       <div class="carousel-body">

//         <img style={{

//           top: "-20px",
//           left: "20px",
//           height: "145px"
//         }} src="https://source.unsplash.com/random/145x220" />

//         <div style={{ paddingLeft: '35%' }}>
//           <h5>Card Title</h5>
//           <p>Nisi aute excepteur aliqua laborum. Elit voluptate dolore ut dolore. Enim ut nostrud non in proident consectetur eu voluptate commodo. Amet consectetur do voluptate do mollit quis.
//           </p>

//         </div>
//       </div>
//     </div>
//   )
// }
