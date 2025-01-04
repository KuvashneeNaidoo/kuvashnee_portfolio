import html from "../assets/img/html.svg";
import css from "../assets/img/css.svg";
import sass from "../assets/img/sass.svg";
import JavaScript from "../assets/img/javascript.svg";
import git from "../assets/img/git.svg";
import JQuery from "../assets/img/jquery.svg";
import React from "../assets/img/react.svg";
import Redux from "../assets/img/redux.svg";
import Node from "../assets/img/node.svg";
import Express from "../assets/img/express1.svg";
import NextJS from "../assets/img/nextjs.svg";
import MongoDB from "../assets/img/mongodb.svg";
import SQL from "../assets/img/sql.svg";
import python from "../assets/img/python.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Skills.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                <p>
                  My passion is frontend development, creating intuitive user
                  interfaces with HTML, CSS, JavaScript, and React. However, I
                  also have experience with backend technologies like Node.js,
                  Express, and databases, enabling me to build full-stack
                  applications.
                </p>
              </p>

              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={html} alt="Image" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={css} alt="Image" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={sass} alt="Image" />
                  <h5>SASS</h5>
                </div>
                <div className="item">
                  <img src={JavaScript} alt="Image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={git} alt="Image" />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img src={JQuery} alt="Image" />
                  <h5>JQuery</h5>
                </div>
                <div className="item">
                  <img src={React} alt="Image" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={Redux} alt="Image" />
                  <h5>Redux</h5>
                </div>
                <div className="item">
                  <img src={Node} alt="Image" />
                  <h5>Node</h5>
                </div>
                <div className="item">
                  <img src={Express} alt="Image" />
                  <h5>Express</h5>
                </div>
                <div className="item">
                  <img src={NextJS} alt="Image" />
                  <h5>NextJS</h5>
                </div>
                <div className="item">
                  <img src={MongoDB} alt="Image" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={SQL} alt="Image" />
                  <h5>SQL</h5>
                </div>
                <div className="item">
                  <img src={python} alt="Image" />
                  <h5>Python</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
