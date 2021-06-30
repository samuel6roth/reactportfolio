import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Hero from "../components/Hero";
import PB from "../assets/PB.jpeg"
import HLGU from "../assets/HLGUlogo.jpeg"
import WU from "../assets/WashUlogo.png"

function Academics() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Academics</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          <Hero backgroundImage={PB}>
            <h1>Poplar Bluff Highschool</h1>
          </Hero>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          <Hero backgroundImage={HLGU}>
            <h1>Hannibal-LaGrange University</h1>
          </Hero>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          <Hero backgroundImage={WU}>
            <h1>Washington University in St. Louis</h1>
          </Hero>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Academics;
