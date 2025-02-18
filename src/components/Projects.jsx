import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import thumbnail1 from "../assets/img/meal-generator.png";
import thumbnail2 from "../assets/img/tip-calculator.png";
import thumbnail3 from "../assets/img/online-store.png";
import thumbnail4 from "../assets/img/itunes-app.png";
import thumbnail5 from "../assets/img/gratitude-journal.png";
import thumbnail6 from "../assets/img/memory-game.png";
import "./Projects.css";

export const Projects = () => {
  const projects = [
    {
      title: "Recipe Generator",
      description:
        "Generate random meal ideas to help with daily meal planning. Built using HTML, CSS, and JavaScript.",
      imgUrl: thumbnail1,
      githubUrl: "https://github.com/KuvashneeNaidoo/recipe-generator",
      liveSiteUrl: "https://meal-generator-frontend.netlify.app/",
    },
    {
      title: "Restaurant Splitter",
      description:
        "Split restaurant bills among group members. Built using React.",
      imgUrl: thumbnail2,
      githubUrl: "https://github.com/KuvashneeNaidoo/restaurant-splitter",
      liveSiteUrl: "https://restaurant-splitter.netlify.app/",
    },
    {
      title: "Online Patisserie Store",
      description:
        "Browse products, add items to the cart, and manage orders. Built with React.",
      imgUrl: thumbnail3,
      githubUrl: "https://github.com/KuvashneeNaidoo/online-patisserie-store",
      liveSiteUrl: "https://online-patisserie-store.netlify.app/",
    },
    {
      title: "iTunes Media Finder",
      description:
        "A media search app using the iTunes API. It allows users to search for music, movies, and other content. Built with React and Express. ",
      imgUrl: thumbnail4,
      githubUrl: "https://github.com/KuvashneeNaidoo/iTunes_App/tree/main",
      liveSiteUrl: "https://itunes-app-frontend.onrender.com/",
    },
    {
      title: "Gratitude Journal",
      description:
        "A digital journal to record and reflect on positive moments. Built with React.",
      imgUrl: thumbnail5,
      githubUrl: "https://github.com/KuvashneeNaidoo/gratitude-journal",
      liveSiteUrl: "https://gratitude-journal-frontend.onrender.com/",
    },
    {
      title: "Memory Game",
      description:
        "A card-matching memory game to improve memory skills. Built with React.",
      imgUrl: thumbnail6,
      githubUrl: "https://github.com/KuvashneeNaidoo/marvel-memory-game",
      liveSiteUrl: "https://marvel-memory-game.netlify.app/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>Projects</h2>
              <p>
                Below is a selection of projects that showcase my skills and
                passion for building functional, interactive, and user-centric
                applications. Each project highlights my ability to work with
                modern web technologies to create seamless experiences, whether
                it's dynamic interfaces, API integration, or responsive designs.
              </p>
              <Row>
                {projects.map((project, index) => {
                  return <ProjectCard key={index} {...project} />;
                })}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
