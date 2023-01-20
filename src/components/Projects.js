import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/help.jpg";
import projImg4 from "../assets/img/food.jpg";
import projImg2 from "../assets/img/library2.jpg";
import projImg3 from "../assets/img/expense.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
  const projects = [
    {
      title: "PERCON",
      description: "Web Development",
      imgUrl: projImg1,
    },
    {
      title: "Library Database Management System",
      description: "GUI using Swing and MySQL",
      imgUrl: projImg2,
    },
    {
      title: "Expense Tracker",
      description: "ReactJS Website",
      imgUrl: projImg3,
    },
    {
      title: "Food Ordering Web",
      description: "ReactJs Website",
      imgUrl: projImg4,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p>Projects indicates how much skills you have developed so far.</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content id="slideInUp">
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
