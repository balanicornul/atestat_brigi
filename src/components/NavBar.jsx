import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import NavIcon1 from "../img/spotify.png";
import NavIcon2 from "../img/reddit.png";
import NavIcon3 from "../img/github.png";
import logo from "../logo.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#work"
              className={
                activeLink === "work" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("work")}
            >
              Work
            </Nav.Link>
            <Nav.Link
              href="#subscription"
              className={
                activeLink === "subscription"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("subscription")}
            >
              Subscription
            </Nav.Link>
          </Nav>

          <span className="navbar-text">
            <div className="social-icon">
              <a href="#">
                <img src={NavIcon1} alt="" />
              </a>
              <a href="#">
                <img src={NavIcon2} alt="" />
              </a>
              <a href="#">
                <img src={NavIcon3} alt="" />
              </a>
            </div>
            <button className="vvd">
              <span>Contact me!</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
