import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Particle from "../../components/particle";
import { Container, Row, Col } from "react-bootstrap";

const ContactUs = () => {
    return (
      <Container fluid className="contact-section">
      <Particle />
      <Container>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
      <Card className="project-card-view">
      <Card.Img className="cardImage center-image" variant="top" src="https://i.pinimg.com/736x/76/9c/bb/769cbbba099da7727e37b8fa8fac9aa0.jpg" alt="call us" />
      <Card.Body>
        <Card.Title>Call Us now!</Card.Title>
        <Card.Text style={{ textAlign: "center" ,fontSize: ""}}>
        0912267580<br/>
        0910088760
        </Card.Text>
        <Button variant="primary" href="#" target="_blank">
          Call now
        </Button>
        </Card.Body>
        </Card>
        </Col>
        </Row>
        </Container>
        </Container>
    )
  }
  
  export default ContactUs;
  
  