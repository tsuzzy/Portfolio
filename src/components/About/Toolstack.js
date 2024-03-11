import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiVisualstudiocode,
    SiWebstorm,
    SiSlack,
    SiGooglecolab,
    SiGithub,
    SiUbuntu,
    SiMacos, SiLatex,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWebstorm  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecolab />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiUbuntu />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiMacos />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiGithub />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiLatex />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiSlack />
        </Col>
    </Row>
  );
}

export default Toolstack;
