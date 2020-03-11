import React from "react";
import "./App.css";

//bootstrap components
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

//components
import TopSection from "./containers/TopSection";
import BottomSection from "./containers/BottomSection";

function App() {
    return (
        <Container id="App" fluid className="noPadding">
            <Row>
                <TopSection />
            </Row>
            <Row>
                <BottomSection />
            </Row>
        </Container>
    );
}

export default App;
