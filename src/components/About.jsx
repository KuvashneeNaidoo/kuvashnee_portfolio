import { Container, Row, Col } from "react-bootstrap";
import certificate from "../assets/img/certificate.pdf"; // Import the certificate file
import CV from "../assets/img/CV - Kuvashnee Naidoo - HTML Frontend Developer.pdf"; // Import the certificate file
import "./About.css";

export const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>About</h2>
              <p>
                My journey in web development began with a desire to learn and
                grow in the tech industry. In 2022, I enrolled in the{" "}
                <strong>Full Stack Web Developer Bootcamp</strong> at{" "}
                <strong>HyperionDev</strong>, where I gained practical, hands-on
                experience in both front-end and back-end development. This
                intensive bootcamp covered technologies such as{" "}
                <strong>HTML</strong>, <strong>CSS</strong>,{" "}
                <strong>JavaScript</strong>, <strong>React</strong>,{" "}
                <strong>Node.js</strong>, and working with{" "}
                <strong>databases</strong>.
              </p>
              <p>
                I completed the bootcamp with a strong understanding of how to
                build dynamic, interactive web applications. During the
                bootcamp, I worked on projects that helped me refine my coding
                skills, problem-solving, and development process.
              </p>
              <p>
                Please feel free to explore my HyperionDev portfolio, view my
                certificate and CV, showcasing my educational achievements and
                professional experience.
              </p>
              <div className="button-group">
                <a
                  className="btn-custom"
                  href="https://www.hyperiondev.com/portfolio/86684/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Portfolio</span>
                </a>
                <a
                  className="btn-custom"
                  href={certificate} // Use the imported certificate URL
                  download="certificate.pdf"
                >
                  <span>Certificate</span>
                </a>
                <a
                  className="btn-custom"
                  href={CV} // Replace with the actual link to your CV
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>CV</span>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
