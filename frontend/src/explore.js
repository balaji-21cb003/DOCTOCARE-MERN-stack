import React from "react";
import "./App.css";
import Logo from "./logo.png";
import "./explore.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faGraduationCap,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Img1 from "./1.jpg";
import Img3 from "./3.jpg";
import Video from "./videoexplore.mp4";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import doctor from "./doctor.jpg";
import department from "./department.jpg";
import bed from "./bed.jpg";
import supprt from "./support.jpg";
import service from "./service.jpg";
import staff from "./staff.jpg";
// import bgex from './explorebg.jpg'

export default function Explore() {
  return (
    <body>
      {/* <img  className='bg' src={bgex}/> */}
      <div className="firstdiv">
        <header>
          <nav className="navbar">
            <img className="logo" src={Logo} alt="logo" />
            <ul>
              <li>
                <FontAwesomeIcon icon={faHome} />
                <a href="/home"> HOME</a>
              </li>
              {/* <li><FontAwesomeIcon icon={faGraduationCap} /><a href="/centreofexclence"> CENTRE OF EXCLENCE</a></li> */}
              <li>
                <FontAwesomeIcon icon={faPhone} />
                <a href="/contact"> CONTACT INFO</a>
              </li>
            </ul>
          </nav>
        </header>
        <div className="display">
          <Carousel className="carousel">
            <Carousel.Item>
              <video
                className="d-blockvideo w-100 m-4 "
                src={Video}
                muted
                autoPlay
                loop
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 className="h3content">
                  Healthcare is not just a service, it is a fundamental right
                  and a precious asset.
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 m-4 "
                src={Img1}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3 className="h3content">
                  Prevention is the key to a healthier future, empowering
                  individuals to take control of their well-being.
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 m-4" src={Img3} alt="Third slide" />

              <Carousel.Caption>
                <h3 className="h3content">
                  Patient care is the heart of a doctor's journey, where empathy
                  and healing merge to nurture the body, mind, and soul.
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          <div className="container">
            <h2 className="container-header4">How we work</h2>
            <h3 className="container-header3">Our Core Values</h3>
            <p className="container-parafirst">
              Our fundamental principles, beliefs and values <br />
              that drive our business
            </p>

            <Row>
              <Col xs={4}>
                <Card className="cards">
                  <Card.Body>
                    <Card.Title> RESPECT</Card.Title>
                    <Card.Text>
                      We always treat people with courtesy, politeness and
                      kindness.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs={4}>
                <Card className="cards">
                  <Card.Body>
                    <Card.Title>RESPONSIBLE</Card.Title>
                    <Card.Text>
                      We always strive to do everything in our capacity to serve
                      our patients better.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={4}>
                <Card className="cards">
                  <Card.Body>
                    <Card.Title>RELIABILITY</Card.Title>
                    <Card.Text>
                      We are committed to providing our reliability by
                      delivering the best possible care and treatment.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <div className="container2">
              <Row>
                <Col xs={6}>
                  <Card className="cards1">
                    <Card.Body>
                      <Card.Title>REASONABLE</Card.Title>
                      <Card.Text>
                        We are committed to offer the best healthcare at the
                        most affordable price.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={6}>
                  <Card className="cards1">
                    <Card.Body>
                      <Card.Title>RELAX</Card.Title>
                      <Card.Text>
                        Relaxed body pave the way for good health and vitality.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
          <div className="cardcontainer">
            <h4 className="card-container-header">Why choose us</h4>
            <p className="card-container-para-firstline">
              We constantly strive to provide the best healthcare,
              <br />
              with such an effort we have achieved,
            </p>
            <React.Fragment>
              <div className="container3  mt-5">
                <div className="row row-cols-3 g-4">
                  <div className="col">
                    <div className="card cardbox1 shadow-lg">
                      <img src={doctor} alt="doctor" height={300} />
                      <div className="card-body">
                        <h3 className="card1">10+ QUALIFIED DOCTOR'S</h3>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="card cardbox2 shadow-lg">
                      <img src={department} alt="doctor" height={300} />
                      <div className="card-body">
                        <h3 className="card2">3 DEPARTMENTS</h3>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="card cardbox3 shadow-lg">
                      <img src={bed} alt="doctor" height={300} />
                      <div className="card-body">
                        <h3 className="card3">760+ BED FACILITIES</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
            {/*next fragment  */}
            <React.Fragment>
              <div className="container3  mt-5">
                <div className="row row-cols-3 g-4">
                  <div className="col">
                    <div className="card cardbox4 shadow-lg">
                      <img src={supprt} alt="doctor" height={300} />
                      <div className="card-body">
                        <h3 className="card4">360 DEGREE SUPPORT</h3>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="card cardbox5 shadow-lg">
                      <img src={service} alt="doctor" height={300} />
                      <div className="card-body">
                        <h3 className="card5">24/7 AMBULANCE SERVICE</h3>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="card cardbox6 shadow-lg">
                      <img src={staff} alt="doctor" height={300} />
                      <div className="card-body">
                        <h3 className="card6">900+ STAFF'S</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          </div>
        </div>
      </div>
    </body>
  );
}
