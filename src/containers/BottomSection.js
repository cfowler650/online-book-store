import React, { useEffect, useState } from "react";

//bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//components
import SideBar from "../components/SideBar";
import GenreNavBar from "../components/GenreNavBar";
import BookCardList from "../components/BookCardList";

const BottomSection = () => {
    const [windowSize, setWindowSize] = useState("");
    useEffect(() => {
        let handleResize = () => {
            setWindowSize(window.innerWidth);
            window.addEventListener("resize", handleResize);
        };
        handleResize();
    });

    const isMobile = windowSize > 600;
    return (
        <Container id="bottom-section" fluid>
            <Row>
                <Container className="noPadding">
                    <Row>
                        {isMobile && (
                            <Col xs={3}>
                                <SideBar />
                            </Col>
                        )}
                        <Col xs>
                            <Container>
                                <Row>
                                    <GenreNavBar />
                                </Row>
                                <Row>
                                    <BookCardList />
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Row>
        </Container>
    );
};

export default BottomSection;
