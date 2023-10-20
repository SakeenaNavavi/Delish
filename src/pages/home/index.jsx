import React from "react";
import Particle from "../../components/particle";
import { Container, Row, Col } from "react-bootstrap";
import Home1 from './index1.jsx';
const Home=()=>{
    return(
        <section>
        <Container fluid className="home-section" id="home" style={{paddingBottom:20}}>
            <br/>
            <Particle/>
            <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15, fontSize:70}} className="heading">
                <strong>Welcome to Delish!{" "}</strong>
                <span className="wave" role="img" aria-labelledby="wave">
                  🍝🥂
                </span>
              </h1>

              <h1 className="heading-name">
                Satisfy your cravings with the Delish online food ordering system. Fast, convenient and tasty.
              </h1>
            </Col>

            </Row>
            
            
            
        </Container>
        </Container>
        <Home1/>
        </section>
    )
}
export default Home;