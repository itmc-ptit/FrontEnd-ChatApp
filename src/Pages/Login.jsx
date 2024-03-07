import { Button, Row, Col, Form } from "react-bootstrap";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { React, useState } from "react";
import { ReactDOM, render } from "react-dom";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/App.css";
import Message from "./Message";

const Account_User = [
  {
    Account: "admin",
    Password: "123",
  },
  {
    Account: "user",
    Password: "321",
  },
];

function checkLogin(user, pwd) {
  for (var i = 0; i < Account_User.length; i++) {
    if (user == Account_User[i].Account && pwd == Account_User[i].Password) {
      return true;
    }
  }
  return false;
}

function Login_Event() {
  if (
    checkLogin(
      document.getElementById("text-account").value,
      document.getElementById("text-password").value
    )
  ) {
    () => Navigate("/chat");
  } else {
    const container = document.getElementById("Message");
    render(<Message msg="home" />, container);

    ReactDOM.render(
      <Message msg="Đăng nhập thất bại" variant="danger" />,
      document.getElementById("Message")
    );
  }
}

export default function Login() {
  const [User, setUser] = useState("");
  const [Pwd, setPwd] = useState("");
  const handleUserChange = (event) => setUser(event.target.value);
  const handlePwdChange = (event) => setPwd(event.target.value);
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/chat");
  };

  return (
    <>
      <Form.Label style={{ paddingTop: "10vh", fontSize: "42px" }}>
        Đăng nhập
      </Form.Label>
      <div className="panel2">
        <Row className="row2">
          <Form.Label column sm={4}>
            Tài khoản
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              id="text-account"
              type="text"
              placeholder="Account"
              onChange={handleUserChange}
              value={User}
            />
          </Col>
          <Form.Label column sm={4}>
            Mật khẩu
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              id="text-password"
              type="password"
              placeholder="Password"
              onChange={handlePwdChange}
              value={Pwd}
            />
          </Col>
          <Col sm={4} style={{ textAlign: "center" }}>
            <Link to="/forgotpassword">
              <Button
                style={{ float: "right", textDecoration: "none" }}
                variant="link"
              >
                Quên mật khẩu?
              </Button>
            </Link>
          </Col>
          <Col sm={8}>
            <Button
              variant="outline-primary"
              onClick={
                checkLogin(User, Pwd)
                  ? handleButtonClick
                  : () => {
                      const container = document.getElementById("Message");
                      const mess = createRoot(container);
                      mess.render(
                        <Message msg="Đăng nhập thất bại" variant="danger" />
                      );
                    }
              }
            >
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
