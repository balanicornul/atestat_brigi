import personal1 from "../img/personal1.jpg";
import personal2 from "../img/personal2.png";
import personal3 from "../img/personal3.png";
import personal4 from "../img/personal4.png";
import personal5 from "../img/personal5.png";
import personal6 from "../img/personal6.png";
import personal7 from "../img/personal7.png";
import personal8 from "../img/personal8.png";
import personal9 from "../img/personal9.png";
import personal10 from "../img/personal10.png";
import personal11 from "../img/personal11.png";
import { Container, Col, Row, Nav, Tab } from "react-bootstrap";
import photography1 from "../img/photography1.png";
import photography2 from "../img/photography2.png";
import photography3 from "../img/photography3.png";
import photography4 from "../img/photography4.png";
import photography5 from "../img/photography5.png";
import photography6 from "../img/photography6.png";
import photography7 from "../img/photography7.png";
import photography8 from "../img/photography8.png";
import photography9 from "../img/photography9.png";
import photography10 from "../img/photography10.png";
import photography11 from "../img/photography11.png";
import photography14 from "../img/photography14.png";
import photography12 from "../img/photography12.png";
import photography13 from "../img/photography3.png";
import landscape1 from "../img/landscape1 (1).png";
import landscape2 from "../img/landscape2.png";
import landscape3 from "../img/landscape3.png";
import landscape4 from "../img/landscape4.png";
import landscape5 from "../img/landscape5.png";
import landscape6 from "../img/landscape6.png";
import landscape7 from "../img/landscape7.png";
import landscape8 from "../img/landscape8.png";
import landscape9 from "../img/landscape9.png";
import { ProjectCard } from "./ProjectCard";

import "animate.css";

export const Media = () => {
  const Photography = [
    {
      title: "Have you been good?",
      imgUrl: photography1,
    },
    {
      title: "Indiana Jones?",
      imgUrl: photography2,
    },
    {
      title: "Candid shot",
      imgUrl: photography3,
    },
    {
      title: "Let's ride",
      imgUrl: photography4,
    },
    {
      title: "Rapunzel when she escaped",
      imgUrl: photography5,
    },
    {
      title: "Never looking back",
      imgUrl: photography6,
    },
    {
      title: "Do you dare?",
      imgUrl: photography7,
    },
    {
      title: "The dolphin is a paid actor",
      imgUrl: photography8,
    },
    {
      title: "Princess Tiana but different",
      imgUrl: photography9,
    },
    {
      title: "Casual day at the temple",
      imgUrl: photography10,
    },
    {
      title: "Is this heaven?",
      imgUrl: photography11,
    },
    {
      title: "Mermaids are tricky",
      imgUrl: photography12,
    },
    {
      title: "George doing George things",
      imgUrl: photography13,
    },
    {
      title: "Black Swan, the chosen one",
      imgUrl: photography14,
    },
  ];
  const Personal = [
    {
      title: "Birthday lunch",
      imgUrl: personal1,
    },
    {
      title: "Sunny in Italy",
      imgUrl: personal2,
    },
    {
      title: "My family",
      imgUrl: personal3,
    },
    {
      title: "Aurora near the Pole",
      imgUrl: personal4,
    },
    {
      title: "When in Hawaii",
      imgUrl: personal5,
    },
    {
      title: "Where the magic happens",
      imgUrl: personal6,
    },
    {
      title: "Sunny as a puppy",
      imgUrl: personal7,
    },
    {
      title: "My wedding",
      imgUrl: personal8,
    },
    {
      title: "Brunch with firends",
      imgUrl: personal9,
    },
    {
      title: "My hometown in December",
      imgUrl: personal10,
    },
    {
      title: "Easter sunday",
      imgUrl: personal11,
    },
  ];
  const Landscape = [
    {
      imgUrl: landscape1,
    },
    {
      imgUrl: landscape2,
    },
    {
      imgUrl: landscape3,
    },
    {
      imgUrl: landscape4,
    },
    {
      imgUrl: landscape5,
    },
    {
      imgUrl: landscape6,
    },
    {
      imgUrl: landscape7,
    },
    {
      imgUrl: landscape8,
    },
    {
      imgUrl: landscape9,
    },
  ];

  return (
    <section className="Work" id="work">
      <Container>
        <Row>
          <Col size={12}>
            {" "}
            <div className={"animate__animated animate__fadeIn"}>
              <h2> Work </h2> <p> A glimpse into my life through pictures </p>{" "}
              <Tab.Container id="work-tabs" defaultActiveKey="Personal">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="Personal"> Personal </Nav.Link>{" "}
                  </Nav.Item>{" "}
                  <Nav.Item>
                    <Nav.Link eventKey="Photography"> Photography </Nav.Link>{" "}
                  </Nav.Item>{" "}
                  <Nav.Item>
                    <Nav.Link eventKey="Landscapes"> Landscapes </Nav.Link>{" "}
                  </Nav.Item>{" "}
                </Nav>{" "}
                <Tab.Content
                  id="slideInUp"
                  className={"animate__animated animate__slideInUp"}
                >
                  <Tab.Pane eventKey="Personal">
                    <Row>
                      {" "}
                      {Personal.map((Personal, index) => {
                        return <ProjectCard key={index} {...Personal} />;
                      })}{" "}
                    </Row>{" "}
                  </Tab.Pane>{" "}
                  <Tab.Pane eventKey="Photography">
                    <Row>
                      {" "}
                      {Photography.map((Photography, index) => {
                        return <ProjectCard key={index} {...Photography} />;
                      })}{" "}
                    </Row>{" "}
                  </Tab.Pane>{" "}
                  <Tab.Pane eventKey="Landscapes">
                    <Row>
                      {" "}
                      {Landscape.map((Landscapes, index) => {
                        return <ProjectCard key={index} {...Landscapes} />;
                      })}{" "}
                    </Row>{" "}
                  </Tab.Pane>{" "}
                </Tab.Content>{" "}
              </Tab.Container>{" "}
            </div>{" "}
          </Col>{" "}
        </Row>{" "}
      </Container>{" "}
    </section>
  );
};
