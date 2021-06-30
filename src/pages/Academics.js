import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import PB from "../assets/PB.jpeg"
import HLGU from "../assets/HLGUlogo.jpeg"
import WU from "../assets/WashUlogo.png"
import Project from "../components/Project";

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
          <Project backgroundImage={PB}>
            <h1>Poplar Bluff Highschool</h1>
          </Project>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          <Project backgroundImage={HLGU}>
            <h1>Hannibal-LaGrange University</h1>
          </Project>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          <Project backgroundImage={WU}>
            <h1>Washington University in St. Louis</h1>
          </Project>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Academics;
