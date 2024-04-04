import { Row, Col, Container, Button, Form } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { React, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/App.css";
import { Slider } from "../Components/Slider";
import { Link } from "react-router-dom";
import axios from 'axios';

function Register() {
  const [Eyes, setEyes] = useState(false);
  const [Name, setName] = useState("");
  const [Pnumber, setPnumber] = useState("");
  const [User, setUser] = useState("");
  const [Birth, setBirth] = useState(Date);
  const [Email, setEmail] = useState("");
  const [Pwd, setPwd] = useState("");
  const [APwd, setAPwd] = useState("");
  const handleNameChange = (event) => setUser(event.target.value);
  const handlePnumberChange = (event) => setUser(event.target.value);
  const handleUserChange = (event) => setUser(event.target.value);
  const handleBirthChange = (event) => setBirth(event.target.value);
  const handleEmailChange = (event) => setUser(event.target.value);
  const handlePwdChange = (event) => setUser(event.target.value);
  const handleAPwdChange = (event) => setUser(event.target.value);
  const handleUserChange = (event) => setUser(event.target.value);
  const navigate = useNavigate();
  const Error_Message = (data) => {
    const container = document.getElementById("Message");
    const mess = createRoot(container);
    mess.render(<Message msg={data} variant="danger" />);
  };
  const SubmitHandler = async() {
    try {
      const response = await axios.post("http://localhost:4000/api/register", {
        Name: Name,
        Phonenumber: Pnumber,
        account: User,
        Date: Birth,
        email: Email,
        password: Pwd,
        password: APwd,
      });
      const userData = response.data;
      console.log('Đăng kí thành công!',response.data);

    } catch(error) {
      console.error('Đăng kí thất bại', error);
    }

  }
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
        Đăng ký
      </Form.Label>
      <Row>
        <Col sm={6}>
          <div>
            <Form.Control type="Name" placeholder="Họ và tên" />
          </div>
        </Col>

        <Col sm={6}>
          <div>
            <Form.Control
              type="Phonenumber"
              placeholder="Số điện thoại (nếu có)"
            />
          </div>
        </Col>
      </Row>

      <Row>
        <Col sm={6}>
          <div>
            <Form.Control type="account" placeholder="Tài khoản" />
          </div>
        </Col>

        <Col sm={6}>
          <div>
            <Form.Control
              id="DateTime"
              type="Date"
              style={{ paddingLeft: "0", textAlign: "center" }}
            />
          </div>
        </Col>

        <Col sm={12}>
          <div>
            <Form.Control type="Email" placeholder="Email" />
          </div>
        </Col>
      </Row>

      <Row>
        <Col sm={6}>
          <div style={{ position: "relative" }}>
            <Form.Control
              type={Eyes ? "text" : "password"}
              placeholder="Mật khẩu"
            />
            <div
              onClick={() => setEyes(!Eyes)}
              style={{ right: "5%", top: "25%", position: "absolute" }}
            >
              {Eyes ? (
                <i className="bi bi-eye-fill" />
              ) : (
                <i className="bi bi-eye-slash-fill" />
              )}
            </div>
          </div>
        </Col>

        <Col>
          <div style={{ position: "relative" }}>
            <Form.Control
              type={Eyes ? "text" : "password"}
              placeholder="Nhập lại mật khẩu"
            />
            <div
              onClick={() => setEyes(!Eyes)}
              style={{ right: "5%", top: "25%", position: "absolute" }}
            >
              {Eyes ? (
                <i className="bi bi-eye-fill" />
              ) : (
                <i className="bi bi-eye-slash-fill" />
              )}
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <div>
          <Button variant="outline-success" style={{ float: "right" }}>
            Đăng Ký
          </Button>
          <Link to="/sign-in">
            <Button variant="outline-danger" style={{ float: "right" }}>
              Đã có tài khoản
            </Button>
          </Link>
        </div>
      </Row>
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
            <Register />
          </Col>
        </Row>
      </Container>
    </>
  );

  

}
