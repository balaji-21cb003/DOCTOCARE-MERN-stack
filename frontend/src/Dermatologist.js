import React, { useEffect, useState } from "react";
import "./dental.css";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faGraduationCap,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Logo from "./logo.png";
import { Link } from "react-router-dom";
export default function Dermatologist() {
    const [docs, setDocs] = useState([]);
    useEffect(() => {
      axios.get("http://localhost:3001/dermatologist").then((resp) => {
        setDocs(resp.data.data);
      });
    }, []);
    console.log(docs);
    console.log(typeof docs);
    return (
      <div className="bg">
        <nav className="navbar-nav">
          <img className="logo" src={Logo} alt="logo" />
          <ul>
            <li>
              <FontAwesomeIcon icon={faHome} />
              <a href="/home"> HOME</a>
            </li>
            {/* <li><FontAwesomeIcon icon={faGraduationCap} /><a href="/centreofexclence"> CENTRE OF EXCLENCE</a></li> */}
            {/* <li><FontAwesomeIcon icon={faPhone} /><a href="/contact"> CONTACT INFO</a></li> */}
          </ul>
        </nav>
  
        <div className="doctor-container">
          <Row>
            {docs &&
              docs.map((data) => (
                <Col key={data.doc_id} xs={3}>
                  <div>
                    <Card className="doctor-card" style={{ width: "19rem" }}>
                      <Card.Img
                        className="doctor-card-img"
                        variant="top"
                        src={data.image}
                      />
                      <Card.Body>
                        <Card.Title
                          style={{
                            fontStyle: "Arial",
                            color: "blue",
                            fontWeight: "600",
                          }}
                        >
                          Dr. {data.name}
                        </Card.Title>
                        <Card.Subtitle
                          style={{
                            fontStyle: "Arial",
                            color: "darkblue",
                            fontWeight: "600",
                          }}
                        >
                          {data.doc_id}
                        </Card.Subtitle>
                        <Card.Text style={{ fontStyle: "Arial", color: "" }}>
                          {data.discription}
                        </Card.Text>
                      </Card.Body>
                      <ListGroup className="list-group-flush ">
                        <ListGroup.Item
                          style={{ color: "red", fontWeight: "600" }}
                        >
                          {data.year} Exprience
                        </ListGroup.Item>
                        <ListGroup.Item
                          style={{ color: "green", fontWeight: "600" }}
                        >
                          {data.no_of_operation}+ Succesful Operations
                        </ListGroup.Item>
                        <ListGroup.Item>Rating:{data.rating}</ListGroup.Item>
                        <ListGroup.Item style={{ color: "black" }}>
                          {data.hospital_name}
                        </ListGroup.Item>
                      </ListGroup>
                      <Card.Body style={{ backGroundColor: "white" }}>
                        <Button variant="outline-success">
                          <Link
                            to="/form"
                            style={{
                              color: "green",
                              fontWeight: "500",
                              textDecoration: "none",
                            }}
                            state={data.doc_id}
                          >
                            Book Appoinment
                          </Link>
                        </Button>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              ))}
          </Row>
        </div>
      </div>
    );
  }
  