import { Row, Col, Container, Button, Form } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/App.css";
import { Slider } from "../Components/Slider";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    account: "",
    birth: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    try {
      console.log(formData);
      const response = await axios.post(
        "http://localhost:4000/api/register",
        formData
      );
      console.log(response.data); // Assuming the API returns some data upon successful registration
    } catch (error) {
      if (error.response && error.response.data) {
        throw new Error(error.response.data.message);
      }
      throw new Error(error.message);
    }
  };

  const [Eyes, setEyes] = useState(false);
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
            <Form.Control
              type="Name"
              placeholder="Họ và tên"
              name="name"
              onChange={handleChange}
              value={formData.name}
            />
          </div>
        </Col>

        <Col sm={6}>
          <div>
            <Form.Control
              type="Phonenumber"
              placeholder="Số điện thoại (nếu có)"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
        </Col>
      </Row>

      <Row>
        <Col sm={6}>
          <div>
            <Form.Control
              type="account"
              placeholder="Tài khoản"
              name="account"
              value={formData.account}
              onChange={handleChange}
            />
          </div>
        </Col>

        <Col sm={6}>
          <div>
            <Form.Control
              id="DateTime"
              type="Date"
              style={{ paddingLeft: "0", textAlign: "center" }}
              name="birth"
              value={formData.birth}
              onChange={handleChange}
            />
          </div>
        </Col>

        <Col sm={12}>
          <div>
            <Form.Control
              type="Email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </Col>
      </Row>

      <Row>
        <Col sm={6}>
          <div style={{ position: "relative" }}>
            <Form.Control
              type={Eyes ? "text" : "password"}
              placeholder="Mật khẩu"
              name="password"
              value={formData.password}
              onChange={handleChange}
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
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
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
          <Button
            variant="outline-success"
            style={{ float: "right" }}
            onClick={handleSubmit}
          >
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
