import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{textAlign: "justify"}}>
            Hi everyone!<br/>
            I am <span className="purple"> Ruixin Song (宋睿昕) </span>,
            often referred to simply as <span className="purple"> Rui </span>
            <br/>
            I'm currently pursuing my Master's in Computer Science at Memorial University of Newfoundland, supervised
            by <span className="purple">Dr. Amilcar Soares Junior</span>
            <br/>
            <br/>
            My research work focuses on marine data mining, complex network, graph deep learning with practical
            application in marine shipping traffic networks and ecological protection.
            <br/>
            Before my journey in Memorial University, I have completed Bachelor of Engineering in Spatial Information and Digital Technology at Shanghai Ocean University in China.
            <br/>
            <br/>
            Aside from my daily work, I also love:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new techs in academia and industry
            </li>
            <li className="about-activity">
              <ImPointRight /> Hiking, skateboarding
            </li>
            <li className="about-activity">
              <ImPointRight /> Indie bands, new classical and pop music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            Everything I am doing is for better understanding this world.{" "}
          </p>
          {/*<footer className="blockquote-footer">Soum</footer>*/}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
