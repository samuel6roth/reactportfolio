import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import bill from "../assets/bill-reminder.png"
import planner from "../assets/dailyplanner.jpg"
import blog from "../assets/tech-blog.jpeg"
import Project from "../components/Project";

function Projects() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Projects</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <a href="https://bill-reminder-project2.herokuapp.com/" target="_blank" rel="noreferrer">
            <Project backgroundImage={bill}>
              <h1>Bill Reminder</h1>
            </Project>
            </a>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          <a href="https://samuel6roth.github.io/DayPlanner/" target="_blank" rel="noreferrer">
            <Project backgroundImage={planner}>
              <h1>Day Planner</h1>
            </Project>
          </a>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          <a href="https://salty-headland-05928.herokuapp.com/" target="_blank" rel="noreferrer">
            <Project backgroundImage={blog}>
              <h1>Tech Blog</h1>
            </Project>
          </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;

