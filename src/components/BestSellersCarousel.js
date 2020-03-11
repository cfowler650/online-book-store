import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './styles/BestSellersCarousel.css';
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
  { title: 'Book Title 1', image: './book1.jpg' },
  { title: 'Book Title 2', image: './book1.jpg' },
  { title: 'Book Title 3', image: './book1.jpg' },
  { title: 'Book Title 4', image: './book1.jpg' },
  { title: 'Book Title 5', image: './book1.jpg' },
  { title: 'Book Title 6', image: './book1.jpg' },
]

let colors = [
  "linear-gradient(pink, #f06d06)",
  "linear-gradient(salmon, pink)",
  "linear-gradient(pink, orange)",
  "linear-gradient(salmon, orange)",
  "linear-gradient(yellow, orange)",
  "linear-gradient(pink, salmon)",
]

const CarouselSlide = ({ thisIndex, title, image }) => {

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  let thisColor = colors[thisIndex]
  return (
    <Card style={{ border: 'none', background: 'inherit', width: "424px", }}>
      <Card.Body style={{ display: "flex", minHeight: "400px", padding: 0 }}>
        <div style={{ paddingLeft: '0' }}>
          <div style={{
            paddingLeft: '30%', background: `${thisColor}`, minHeight: '72%'
          }}>
            <img style={{
              position: "absolute",
              top: "40px",
              left: "20px",
              width: "190px",
              height: "290px"
            }} src={image} />
            <div style={{
              fontSize: "12px", paddingLeft: 100,
              paddingRight: 20, paddingTop: "40px"
            }}>
              <Card.Title style={{ fontSize: "16px" }}>{title}</Card.Title>
              <Card.Text>
                Nisi aute excepteur aliqua laborum. Elit voluptate dolore ut dolore. Enim ut nostrud non in proident consectetur eu voluptate commodo.
             </Card.Text>

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

    nextArrow: <Arrow />,
  };
  return (
    <Container fluid>
      <Jumbotron style={{ padding: 0, margin: 0, backgroundColor: 'inherit' }}>
        <Slider {...settings}>

          {books.map((book, index) => {
            return (
              <div style={{ paddingRight: "10px" }}>
                <CarouselSlide thisIndex={index} title={book.title} image={book.image} />
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
