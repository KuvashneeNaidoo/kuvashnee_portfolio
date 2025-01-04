import { Container, Row, Col } from "react-bootstrap";
import "./Contact.css";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col size={12} md={6} className="text-center">
            <div>
              <h2>Get In Touch</h2>
              <p>
                If you’d like to reach out, feel free to contact me. I’d love to
                hear from you!
              </p>
              <div className="contact-info">
                <p>
                  <strong>Email:</strong> <a>kuvashnee01@gmail.com</a>
                </p>
              </div>
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/kuvashnee-naidoo-924947222"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={navIcon1} alt="LinkedIn Icon" />
                </a>
                <a
                  href="https://github.com/KuvashneeNaidoo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={navIcon2} alt="GitHub Icon" />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
