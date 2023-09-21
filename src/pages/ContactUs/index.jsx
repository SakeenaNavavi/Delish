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
        0912267580 / 0910088760
        </Card.Text>
        <Button variant="primary" href="#" target="_blank">
          Call now
        </Button>
        </Card.Body>
        </Card>
        </Col>
          <Col md={4} className="project-card">
        <Card className="project-card-view">
        <Card.Img className="cardImage center-image" variant="top" src="https://i.pinimg.com/1200x/f8/57/7a/f8577aa6eac5386914f36d5998182d84.jpg" alt="call us" />
        <Card.Body>
          <Card.Title>Drop us an E-mail now!</Card.Title>
          <Card.Text style={{ textAlign: "center" ,fontSize: ""}}>
          <a href="delishFoods@gmail.com">DelishFoods@gmail.com</a>
          </Card.Text>
          <Button variant="primary" href="#" target="_blank">
            E-mail now!
          </Button>
          </Card.Body>
          </Card>
          </Col>
          <Col md={4} className="project-card">
        <Card className="project-card-view">
        <Card.Img className="cardImage center-image" variant="top" src="https://i.pinimg.com/1200x/78/35/9e/78359e4db35ea30913446ef1d3f78588.jpg" alt="call us" />
        <Card.Body>
          <Card.Title>Drop a Message on WhatsApp</Card.Title>
          <Card.Text style={{ textAlign: "center" ,fontSize: ""}}>
          076 183 7219
          </Card.Text>
          <Button variant="primary" href="#" target="_blank">
            Message now!
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
  
  