import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import headerImg from "../assets/img/header-img.jpg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "../App.css";

const Banner = () => {
  const [loopNum, setLoopNum] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [text, setText] = React.useState("");
  const [delta, setDelta] = React.useState(300 - Math.random() * 100);
  const period = 2000;

  const toRotate = React.useMemo(() => ["Administrator", "IT Specialist", "Bodybuilder"], []);

  const tick = React.useCallback(() => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum((prevLoopNum) => prevLoopNum + 1);
      setDelta(500);
    }
  }, [isDeleting, loopNum, text.length, toRotate, period]);

  React.useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [delta, tick]);

  const techStack = [
    { technology: "React.js", proficiency: "Proficient" },
    { technology: "Node.js", proficiency: "Advanced" },
    { technology: "JavaScript", proficiency: "Advanced" },
    { technology: "HTML/CSS", proficiency: "Intermediate" },
    { technology: "MongoDB", proficiency: "Intermediate" },
    { technology: "Windows Server", proficiency: "Advanced" },
    { technology: "Active Directory", proficiency: "Advanced" },
    { technology: "PowerShell", proficiency: "Intermediate" },
    { technology: "VMware", proficiency: "Intermediate" },
    { technology: "Python", proficiency: "Intermediate" },
    { technology: "SQL", proficiency: "Proficient" },
    { technology: "Git", proficiency: "Intermediate" },
  ];

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-start">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h1 className="banner-text">
                    {`Hi! I'm Kamil`}{" "}
                    <span className="txt-rotate" data-period="1000" data-rotate={JSON.stringify(toRotate)}>
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                </div>
              )}
            </TrackVisibility>
            <Row className="mt-5">
              <Col>
                <div className="custom-tech-table-container">
                  <h2>Tech Stack</h2>
                  <Table striped bordered hover className="custom-tech-table">
                    <thead>
                      <tr>
                        <th>Technology</th>
                        <th>Proficiency</th>
                      </tr>
                    </thead>
                    <tbody>
                      {techStack.map((item, index) => (
                        <tr key={index}>
                          <td>{item.technology}</td>
                          <td>{item.proficiency}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" className="header-img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;