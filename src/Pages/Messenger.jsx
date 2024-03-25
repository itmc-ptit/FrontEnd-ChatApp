import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  Button,
  Nav,
  Image,
  Form,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../assets/css/Sidemenubar.css";
import "@flaticon/flaticon-uicons/css/all/all.css";
import Mode from "../Components/Mode";
import "bootstrap/js/dist/dropdown";
import { Link } from "react-router-dom";

function SidebarMenu() {
  const [Content, setContent] = useState("Đoạn chat");
  const [Text, setText] = useState(false);
  return (
    <>
      <Container
        style={{
          float: "left",
          padding: "0",
          width: Text ? "15vw" : "5vw",
          backgroundColor: "#4A55A2",
          position: "relative",
          textAlign: Text ? "left" : "center",
          overflow: "hidden",
        }}
      >
        <Row>
          <Col
            xs="auto"
            md={3}
            style={{
              paddingLeft: "0",
              width: Text ? "18vw" : "6vw",
              height: "100vh",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              paddingRight: "0",
            }}
          >
            <div>
              <ul className="nav nav-pills flex-column">
                <li
                  style={{
                    marginTop: "0",
                    width: "100%",
                  }}
                  className="nav-item text-white fs-4 py-2 py-sm-0"
                >
                  <a
                    className="nav-link text-white fs-5"
                    style={{
                      border: "0",
                    }}
                    onClick={() => setText(!Text)}
                  >
                    <i
                      style={{ fontSize: Text ? "24px" : "16px" }}
                      className="bi bi-grid"
                    ></i>
                    {Text && (
                      <span className="ms-3">
                        <strong style={{ fontSize: "24px" }}>CWM</strong>
                      </span>
                    )}
                  </a>
                  <a
                    className="nav-link text-white fs-5"
                    aria-current="page"
                    onClick={() => setContent("Đoạn chat")}
                  >
                    <i className="bi bi-chat-quote-fill"></i>
                    {Text && (
                      <span className="ms-3 d-none d-sm-inline">Đoạn chat</span>
                    )}
                  </a>
                </li>
                <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                  <a
                    className="nav-link text-white fs-5"
                    aria-current="page"
                    onClick={() => setContent("Bạn bè")}
                  >
                    <i className="bi bi-people-fill"></i>
                    {Text && (
                      <span className="ms-3 d-none d-sm-inline">Bạn bè</span>
                    )}
                  </a>
                </li>
                <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                  <a
                    className="nav-link text-white fs-5"
                    aria-current="page"
                    onClick={() => setContent("Thông báo")}
                  >
                    <i className="bi bi-bell-fill"></i>
                    {Text && (
                      <span className="ms-3 d-none d-sm-inline">Thông báo</span>
                    )}
                  </a>
                </li>
                <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                  <a
                    className="nav-link text-white fs-5"
                    aria-current="page"
                    onClick={() => setContent("Tin nhắn chờ")}
                  >
                    <i className="bi bi-chat-dots-fill"></i>
                    {Text && (
                      <span className="ms-3 d-none d-sm-inline">
                        Tin nhắn chờ
                      </span>
                    )}
                  </a>
                  <hr style={{ width: "100%" }} />
                  {Text && (
                    <span className="ms-3 d-none d-sm-inline">
                      <i class="bi bi-sun-fill"></i> {" Chế độ: "}
                    </span>
                  )}
                  <Mode className="ms-3" />
                  <a
                    className=" nav-link text-white fs-9"
                    type="button"
                    id="triggerId"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{
                      border: "0px",
                      width: "100%",
                      paddingLeft: "18px",
                      textDecoration: "none",
                    }}
                  >
                    <i className="bi bi-gear"></i>
                    {Text && (
                      <span className="d-none d-sm-inline"> Cài đặt</span>
                    )}
                  </a>
                  <div className="dropdown-menu" aria-labelledby="triggerId">
                    <Link to={"/profile"} style={{ textDecoration: "none" }}>
                      <span className="dropdown-item">Hồ sơ của bạn</span>
                    </Link>
                    <span className="dropdown-item" style={{ color: "red" }}>
                      Đăng xuất
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <Container
        style={{
          height: "100vh",
          width: "30vw",
          backgroundColor: "#fff",
          borderRight: "1px solid",
          float: "left",
          padding: "0",
          overflow: "hidden",
          overflowY: "scroll",
        }}
      >
        <Navbar
          style={{
            height: "10vh",
            backgroundColor: "#fff",
            boxShadow: "0px 0px 25px 0px rgba(0,0,0,0.1)",
            WebkitBoxShadow: "0px 0px 25px 0px rgba(0,0,0,0.2)",
            margin: "0",
            padding: "0",
          }}
        >
          <h3 style={{ width: "100%", textAlign: "center" }}>{Content}</h3>
        </Navbar>
      </Container>
    </>
  );
}

function NavbarMenu() {
  return (
    <>
      <Navbar
        style={{
          height: "10vh",
          backgroundColor: "#fff",
          boxShadow: "0px 0px 25px 0px rgba(0,0,0,0.1)",
          WebkitBoxShadow: "0px 0px 25px 0px rgba(0,0,0,0.2)",
        }}
      >
        <Image
          src="https://avatar.iran.liara.run/public/boy?username=Nguyen_Thanh_Vinh"
          style={{
            height: "36px",
            position: "relative",
            top: "0",
            left: "25px",
          }}
          rounded
        />
        <Navbar.Text
          style={{
            fontSize: "1rem",
            height: "10vh",
            position: "relative",
            top: "0",
            left: "25px",
          }}
        >
          <span style={{ margin: "0", position: "relative" }} className="ms-3">
            {"Nguyễn Thành Vinh"}
            <span
              style={{
                fontSize: "12px",
                position: "absolute",
                bottom: "-1.5rem",
                left: "10px",
              }}
            >
              <i
                style={{
                  position: "absolute",
                  fontSize: "36px",
                  color: "green",
                  bottom: "-20px",
                  left: "-25px",
                }}
                className="bi bi-dot"
              ></i>
              Online
            </span>
          </span>
        </Navbar.Text>
      </Navbar>
    </>
  );
}

function TextChatBox() {
  return (
    <>
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
    </>
  );
}

function MainChat() {
  return (
    <>
      <div
        style={{
          width: "auto",
          minHeight: "81.5vh",
          maxHeight: "81.5vh",
          background: "#fff",
          margin: "0",
          overflow: "hidden",
          overflowY: "scroll",
        }}
      ></div>
    </>
  );
}

export default function Chat() {
  return (
    <>
      <SidebarMenu />
      <Container
        style={{
          width: "100v%",
          margin: "0",
          padding: "0",
          position: "static",
        }}
        fluid
      >
        <NavbarMenu />
        <MainChat />
        <TextChatBox />
      </Container>
    </>
  );
}
