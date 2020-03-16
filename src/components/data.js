import React from "react";

export let books = [
    {
        title: "Harry Potter Order Of The Phoenix",
        image: "./harrypotter.jpg",
        author: "J.K. Rowling",
        rating: 5
    },
    {
        title: "Big Magic: Creative Living Beyond Fear",
        image: "./bigmagic.jpg",
        author: "Elizabeth Gilbert",
        rating: 3
    },
    {
        title: "Thousand Skies About You",
        image: "./thousandskiesaboveyou.jpg",
        author: "Claudia Gray",
        rating: 2
    },
    {
        title: "Book Title 4",
        image: "./bigmagic.jpg",
        author: "John Winkleman",
        rating: 4
    },
    {
        title: "Book Title 5",
        image: "./bigmagic.jpg",
        author: "John Winkleman",
        rating: 5
    },
    {
        title: "Book Title 6",
        image: "./bigmagic.jpg",
        author: "John Winkleman",
        rating: 3
    }
];

export let colors = [
    "salmon, pink",
    "salmon, orange",
    "salmon, crimson",
    "salmon, orange",
    "salmon, pink",
    "salmon, pink"
];

//dummy data for BookCardList component

export let cardListBooks = [
    {
        title: "Act Like it",
        image: "./actlikeit.jpg",
        author: "John Winkleman",
        rating: 5
    },
    {
        title: "Alone On The Wall",
        image: "./aloneonthewall.jpg",
        author: "David Roberts",
        rating: 3
    },
    {
        title: "The Painter's Daughter",
        image: "./thepaintersdaughter.jpg",
        author: "Julie Kiessan",
        rating: 2
    },
    {
        title: "Dark Murder",
        image: "./darkmurder.jpg",
        author: "Helen H",
        rating: 4
    },
    {
        title: "Alex Ferguson: My Autobiography",
        image: "./alexferguson.jpg",
        author: "Alex Ferguson",
        rating: 5
    },
    {
        title: "The Devil's Playground",
        image: "./thedevilsplayground.jpg",
        author: "Eliza Freed",
        rating: 5
    },
    {
        title: "Inconveivable",
        image: "./inconceivable.jpg",
        author: "Tegan Wren",
        rating: 3
    },
    {
        title: "Four Days",
        image: "./fourdays.jpg",
        author: "Lain Ryan",
        rating: 3
    }
];

//sideBar component data
export const authorsData = [
    { name: "Sebastian Jeremy", image: "./avatar1.jpg" },
    { name: "Johnathen Doe", image: "./avatar2.jpg" },
    { name: "Angeline Summer", image: "./avatar3.jpg" },
    { name: "Noah Jones", image: "./avatar5.jpg" },
    { name: "Irene Cassandra", image: "./avatar8.jpg" }
];

export const booksData = [
    {
        name: "Big Magic: Creative Living Beyond Fear",
        image: "./fourdays.jpg",
        author: "John Cusask"
    },
    {
        name: "Big Magic: Creative Living Beyond Fear",
        image: "./darkmurder.jpg",
        author: "John Cusask"
    },
    {
        name: "Big Magic: Creative Living Beyond Fear",
        image: "./inconceivable.jpg",
        author: "John Cusask"
    },
    {
        name: "Big Magic: Creative Living Beyond Fear",
        image: "./thedevilsplayground.jpg",
        author: "John Cusask"
    },
    {
        name: "Big Magic: Creative Living Beyond Fear",
        image: "./thepaintersdaughter.jpg",
        author: "John Cusask"
    }
];

//genre tags for genreNavBar component
export const genreTags = [
    "All Genres",
    "Business",
    "Science",
    "Fiction",
    "Philosophy",
    "Biography"
];

//settings for carouselSlider + custom arrow function for BestSellersCarousel component

export function Arrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                height: "100%",
                width: "100px"
            }}
            onClick={onClick}
        />
    );
}

export let carouselSliderSettings = {
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
