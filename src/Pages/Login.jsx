import { Button, Row, Col, Form, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/App.css";
import Message from "../Components/Message";
import { Slider } from "../Components/Slider";
import axios from "axios";

function Login() {
  const [User, setUser] = useState("");
  const [Pwd, setPwd] = useState("");
  const handleUserChange = (event) => setUser(event.target.value);
  const handlePwdChange = (event) => setPwd(event.target.value);
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/chat");
  };
  const SubmitHandler = async () => {
    try {
      await axios.post("http://localhost:4000/api/login", {
        email: User,
        password: Pwd,
      });
    } catch (error) {
      throw new Error(error.Message);
    }
  };

  return (
    <>
      <Form.Label
        style={{
          paddingTop: "10vh",
          fontSize: "60px",
          textAlign: "center",
          width: "100%",
        }}
      >
        Đăng nhập
      </Form.Label>
      <div className="panel2">
        <Row className="row2">
          <Form.Label column sm={3}>
            Tài khoản
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              id="text-account"
              type="text"
              placeholder="Account"
              onChange={handleUserChange}
              value={User}
              autoFocus
            />
          </Col>
          <Form.Label column sm={3}>
            Mật khẩu
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              id="text-password"
              type="password"
              placeholder="Password"
              onChange={handlePwdChange}
              value={Pwd}
            />
          </Col>
          <Col sm={4}>
            <Link to="/forgotpassword">
              <Button
                style={{
                  textDecoration: "none",
                  padding: "0",
                }}
                variant="link"
              >
                Quên mật khẩu?
              </Button>
            </Link>
          </Col>
          <Col sm={8}>
            <Button variant="outline-primary" onClick={SubmitHandler}>
              Đăng nhập
            </Button>
            <Link to="/sign-up">
              <Button variant="outline-success">Đăng ký</Button>
            </Link>
          </Col>
          <div id="Message"></div>
        </Row>
      </div>
    </>
  );
}

export default function UI() {
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
