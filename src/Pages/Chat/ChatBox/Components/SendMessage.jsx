import { Button, Col, Form, Row } from "react-bootstrap";
import "~/assets/css/Sidemenubar.css";
import "@flaticon/flaticon-uicons/css/all/all.css";

function SendMessage() {
  return (
    <div
      style={{
        // position: "absolute",
        height: "8.5vh",
        bottom: "0",
        right: "0",
        width: "100%",
        backgroundColor: "#fff",
        boxShadow: "0px 0px 25px 0px rgba(0,0,0,0.1)",
        WebkitBoxShadow: "0px 0px 25px 0px rgba(0,0,0,0.2)",
      }}
    >
      <Row>
        <Col sm={11}>
          <Form.Control
            style={{ marginTop: "5px", marginBottom: "0" }}
            type="text"
          ></Form.Control>
        </Col>
        <Col sm={1}>
          <Button
            style={{
              marginTop: "10px",
              marginRight: "10px",
              textAlign: "center",
              width: "100%",
              backgroundColor: "#fff",
              border: "0",
              color: "#4A55A2",
            }}
          >
            <i className="fi fi-rr-paper-plane-top"></i>
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default SendMessage;
