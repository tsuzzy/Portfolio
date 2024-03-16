import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import TempVar from "../../Assets/Project/region.png";
import TransGravityModel from "../../Assets/Project/model.png";
import CovidGallery from "../../Assets/Project/covidgallery.png";
import StockPrice from "../../Assets/Project/stock.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Research <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few research works I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TransGravityModel}
              isBlog={false}
              title="TransformerGravity"
              description="A gravity-informed deep learning framework with the self-attention mechanism for marine traffic patterns forecast."
              ghLink="https://github.com/AISViz/risk-assessment"
              paperLink="https://arxiv.org/abs/2401.13098"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TempVar}
              isBlog={false}
              title="Ballast Water Risk Assessment for Canadian Waters"
              description="Spatial-temporal analysis of sea-surface salinity and temperature's variability and their impact on the ballast water risk assessment (BWRA) model of Transport Canada."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              // demoLink="https://blogs.soumya-jit.tech/"
              paperLink="https://doi.org/10.1007/s10530-023-03019-1"
            />
          </Col>
        </Row>
      </Container>

      <Container>
        <h1 className="project-heading">
          Side <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          I work on these projects by interest or from courses.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={StockPrice}
              isBlog={false}
              title="Time series modeling of stock prices (ongoing)"
              description=""
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              // demoLink="https://blogs.soumya-jit.tech/"
              // paperLink="https://doi.org/10.1007/s10530-023-03019-1"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CovidGallery}
              isBlog={false}
              title="COVID-19 Storyline Exhibition"
              description="User-interactive COVID-19 storyline exhibition in 3D scenes implemented with D3.js and WebGL."
              // ghLink="https://github.com/AISViz/risk-assessment"
              demoLink="https://youtu.be/4YR_imq2ktE?si=cF3BkjHl4iSMw2dY"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
