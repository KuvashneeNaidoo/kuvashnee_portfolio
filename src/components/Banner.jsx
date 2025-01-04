import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/kuvashnee-naidoo.jpg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import "./Banner.css";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <div className="animate__animated animate__fadeIn">
              <h1>{`Hi! I'm Kuvashnee`} </h1>
              <p>
                I am a certified full-stack developer with a strong focus on
                front-end development and expertise in HTML, CSS, JavaScript,
                and React. Currently working as a Technical Quality Specialist,
                I have honed skills in problem-solving, attention to detail, and
                collaborating with cross-functional teams.Passionate about
                creating responsive and user-centric web applications, I thrive
                on combining design and functionality to deliver seamless
                digital experiences. With a commitment to continuous learning
                and staying at the forefront of technology trends, I am eager to
                transition into front-end development and contribute
                meaningfully to innovative projects.
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header" className="rounded-image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
