import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import heroImage from "../assets/telluride.jpeg"

function About() {
  return (
    <div>
      <Hero backgroundImage={heroImage}>
        <h1>Samuel Roth</h1>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>About Me</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
            I was born and raised in Poplar Bluff, MO. Currently, I am an apprentice mold designer and builder at my fathers plastic injection molding
            factory. I enjoy my profession very much because it often requires critical thinking and problem
            solving skills. A few of the softwares I am familiar with and machines I can run include: Vero
            VISI, Solidworks, manual lathe, bridgeport milling machine, Fadal CNC machine, Agie EDM machine, and 
            surface grinding machine.
            </p>
            <p>
            In my free time, I enjoy spending time with my wife and family, hunting, fishing, traveling, spending time outdoors, 
            working on our family farm, riding horses, and building stuff. My most recent build was a teardrop camper.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
