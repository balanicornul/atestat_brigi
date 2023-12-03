import { Container, Row, Col } from "react-bootstrap";
import header from "../img/header1.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";

export const Banner = () => {
  return (
    <section className="banner">
      <Container>
        <Row>
          <Col md={6} className="banner__text">
            <h1 className="animate__animated animate__fadeInUp">
              {" "}
              We are a digital agency focused on delivering content and utility
              user - experiences.{" "}
            </h1>{" "}
            <p className="animate__animated animate__fadeInUp">
              {" "}
              Over the past 12 years we have worked with clients across a wide -
              range of industries from finance to food & amp; drink, sports,
              charity and more.{" "}
            </p>{" "}
            <button className="btn btn-primary animate__animated animate__fadeInUp">
              {" "}
              Learn More <ArrowRightCircle />{" "}
            </button>{" "}
          </Col>{" "}
          <Col md={6} className="banner__img">
            <img
              src={header}
              alt="header"
              className="animate__animated animate__fadeInUp"
            />
          </Col>{" "}
        </Row>{" "}
      </Container>{" "}
    </section>
  );
};
