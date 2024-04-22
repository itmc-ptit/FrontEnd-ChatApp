import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Mode from "~/Components/Mode";

function SideBar() {
  const [Content, setContent] = useState("Đoạn chat");
  const [Text, setText] = useState(false);
  return (
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
                    <i className="bi bi-sun-fill"></i> {" Chế độ: "}
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
                  {Text && <span className="d-none d-sm-inline"> Cài đặt</span>}
                </a>
                <div
                  style={{ zIndex: "1", position: "absolute" }}
                  className="dropdown-menu"
                  // aria-labelledby="triggerId"
                >
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
  );
}

export default SideBar;
