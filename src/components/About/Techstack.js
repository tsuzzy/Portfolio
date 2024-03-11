import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { FaFlask } from "react-icons/fa";
import {
    SiPytorch,
    SiScikitlearn,
    SiScipy,
    SiLatex,
    SiPostgresql,
    SiWebgl,
    SiFlask,
} from "react-icons/si";
import {
    DiMysql,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
    DiUbuntu,
} from "react-icons/di";
// import {
//   SiRedis,
//   SiFirebase,
//   SiNextdotjs,
//   SiSolidity,
//   SiPostgresql,
// } from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
            <DiPython />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiPytorch />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiScikitlearn />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiScipy />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiGit />
        </Col>
        {/*<Col xs={4} md={2} className="tech-icons">*/}
        {/*    <CgCPlusPlus />*/}
        {/*</Col>*/}
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiWebgl />
        </Col>
      {/*<Col xs={4} md={2} className="tech-icons">*/}
      {/*  <TbBrandGolang />*/}
      {/*</Col>*/}
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiFlask />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiJava />
        </Col>
      {/*<Col xs={4} md={2} className="tech-icons">*/}
      {/*  <SiSolidity />*/}
      {/*</Col>*/}
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiMysql />
        </Col>
      {/*<Col xs={4} md={2} className="tech-icons">*/}
      {/*  <SiNextdotjs />*/}
      {/*</Col>*/}
      {/*<Col xs={4} md={2} className="tech-icons">*/}
      {/*  <DiGit />*/}
      {/*</Col>*/}
      {/*<Col xs={4} md={2} className="tech-icons">*/}
      {/*  <SiFirebase />*/}
      {/*</Col>*/}
      {/*<Col xs={4} md={2} className="tech-icons">*/}
      {/*  <SiRedis />*/}
      {/*</Col>*/}
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
        {/*<Col xs={4} md={2} className="tech-icons">*/}
        {/*    <SiRedis />*/}
        {/*</Col>*/}
      {/*<Col xs={4} md={2} className="tech-icons">*/}
      {/*  <DiJava />*/}
      {/*</Col>*/}
    </Row>
  );
}

export default Techstack;
