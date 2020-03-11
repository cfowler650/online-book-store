import React from "react";

//bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

//components
import MainNavBar from "../components/MainNavBar";
import BestSellersCarousel from "../components/BestSellersCarousel";

const TopSection = () => {
    return (
        <Container id="top-section" fluid>
            <Row>
                <MainNavBar />
            </Row>
            <Row>
                <BestSellersCarousel />
            </Row>
        </Container>
    );
};

export default TopSection;
