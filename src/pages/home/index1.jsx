import { Container, Row, Col } from "react-bootstrap";
import React, { useEffect, useRef, useState } from "react";
import { AiFillFacebook, AiFillYoutube, AiFillInstagram } from "react-icons/ai";

const Home1 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const isInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    const handleScroll = () => {
      if (isInViewport(elementRef.current)) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const className = isVisible ? "animate-on-scroll active" : "animate-on-scroll";

  return (
    <Container fluid className="home-about-section" id="about">
      <Row>
        <Col md={8} className={`home-about-description ${className}`} ref={elementRef}>
          <h1 style={{ fontSize: "2.6em" }}>
            Delish, The ultimate solution for satisfying your hunger!
          </h1>
          <p className="home-about-body" style={{ fontSize: "1.5em" }}>
            Welcome to <b>Delish</b> the best food ordering website for you! Whether you are craving for a pizza, a burger, a salad, or anything in between, we have got you covered.
            <br />
            You can browse through varieties of menus and favorite dishes, reserve tables with just a few clicks.
            <br />
            Delish is more than just a food ordering website, it is your ultimate destination for satisfying your hunger. So what are you waiting for? Join Delish today and discover the world of delicious food at your fingertips! 😋
          </p>
        </Col>
        <Col md={4} className="myAvtar">
          <img src="https://th.bing.com/th/id/R.c433ecefcb9f71d9511214bf9c28c0a6?rik=vPsAzdZN%2fOWB9A&riu=http%3a%2f%2fwww.dylanlukephotography.com%2fwp-content%2fuploads%2f2013%2f09%2fRESTAURANT-0010.jpg&ehk=XaUTxZR1XPOcyHwrDkMNhfvhTubCdZyknOirE7TKZc0%3d&risl=&pid=ImgRaw&r=0" className="img-fluid" alt="Delish restaurant" width="500" height="500" />
        </Col>
      </Row>
      <div class="w3-container w3-teal">
        <Row>
          <Col md={12} className={`home-about-social ${className}`}>
            <ul className="home-about-social-links">
              <h2>Find Us on:</h2>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillYoutube />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Home1;
