import meter1 from "../assets/img/85x.png";
import meter2 from "../assets/img/90x.png";
import meter3 from "../assets/img/75x.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import { Container, Row, Col } from "react-bootstrap";
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
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                {" "}
                Skills are the most essential thing for the betterment of a
                person.{" "}
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h4>Cpp</h4>
                  <h5>85%</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h4>Html</h4>
                  <h5>90%</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h4>MySQL</h4>
                  <h5>80%</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h4>Javascipt</h4>
                  <h5>80%</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h4>CSS</h4>
                  <h5>85%</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h4>ReactJs</h4>
                  <h5>70%</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h4>DBMS</h4>
                  <h5>90%</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h4>OS</h4>
                  <h5>80%</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h4>OOPS</h4>
                  <h5>80%</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h4>Django</h4>
                  <h5>65%</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  );
};
