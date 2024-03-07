import { Container, Row, Col } from "react-bootstrap";
import { React } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/App.css";
import { Slider } from "./Pages/Slider";
import Login from "./Pages/Login";


export default function App() {
  return (
    <>
      <Container fluid className="Container">
        <Row>
          <Col xs={6} sm={6} lg={6} className="col1">
            <Slider />
          </Col>
          <Col xs={6} sm={6} lg={6} className="col2">
            <Login />
          </Col>
        </Row>
      </Container>
    </>
  );
}
