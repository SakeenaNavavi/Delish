import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import {AiFillFacebook, AiFillYoutube, AiFillInstagram,} from 'react-icons/ai';
const Home1=()=>{
    return (
        <Container fluid className="home-about-section" id="about">

          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                Delish, The ultimate solution for satisfying your hunger!
              </h1>
              <p className="home-about-body" style={{fontSize: "1.5em"}}>
              Welcome to <b>Delish</b> the best food ordering website for you! Whether you are craving for a pizza, a burger, a salad, or anything in between, we have got you covered.
              <br/>
              You can browse through varieties of menus and favorite dishes, reserve tables with just a few clicks.
              <br/>
              Delish is more than just a food ordering website, it is your ultimate destination for satisfying your hunger. So what are you waiting for? Join Delish today and discover the world of delicious food at your fingertips! 😋
              </p>
            </Col>
            <Col md={4} className="myAvtar">
            <img src="https://th.bing.com/th/id/R.c433ecefcb9f71d9511214bf9c28c0a6?rik=vPsAzdZN%2fOWB9A&riu=http%3a%2f%2fwww.dylanlukephotography.com%2fwp-content%2fuploads%2f2013%2f09%2fRESTAURANT-0010.jpg&ehk=XaUTxZR1XPOcyHwrDkMNhfvhTubCdZyknOirE7TKZc0%3d&risl=&pid=ImgRaw&r=0" className="img-fluid" alt="Delish restaurant" width="500" height="500"/>
            </Col>
          </Row>
          <div class="w3-container w3-teal">
          <Row>
            <Col md={12} className="home-about-social">
              <ul className="home-about-social-links">
                <h2>Find Us on:</h2>
                <li className="social-icons">
                <a
                  href= "https://www.facebook.com/"
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
    )
}
export default Home1;