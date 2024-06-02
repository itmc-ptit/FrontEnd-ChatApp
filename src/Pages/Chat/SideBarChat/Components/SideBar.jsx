/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unsafe-optional-chaining */
import { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Mode from "~/Components/Mode";
import { chatContext } from '../../ChatPage'
import axios from "axios";
import { ChatState } from "~/Context/ChatProvider";

export async function reloadSideBar(token, userid) {
  try {
    let arrayUser = [];
    const headers = { 'Authorization': token };
    await axios.get("http://localhost:4000/api/chats", { headers }).then(response => {
      if (response.status == "200") {
        const getData = response?.data;
        // console.log(getData)
        getData?.data.forEach((data) => {
          let nameOtherUser;
          data.users.map((data) => { if (data.userId != userid) { nameOtherUser = data.name } });
          arrayUser.push({
            chatId: data?.chatRoomId,
            name: (data?.isGroup ? ("Nhóm: " + data?.name) : nameOtherUser),
            photo: data?.photo === null ? `https://ui-avatars.com/api/?name=${(data?.isGroup ? data?.name : nameOtherUser).replaceAll(' ', '+')}&background=random` : data.photo,
            latestMessage: data.latestMessage === null ? `Chưa có tin nhắn` : data.latestMessage
          })
        })
        // console.log(arrayUser)
      }
    }).catch();
    return arrayUser
  } catch (error) {
    //
  }
}
function SideBar() {
  const getContext = useContext(chatContext);
  const { setChats, content } = ChatState();
  const [Text, setText] = useState(false);
  const { user } = ChatState()
  useEffect(() => { if (document.getElementById('Chat') != null) document.getElementById('Chat').click() }, [])
  const chatBoxHandle = async () => {
    if (user?.userId != undefined) {
      getContext.setContentSideBar("Đoạn chat");
      const data = await reloadSideBar(user?.token, user?.userId);
      if (data != undefined) setChats(data);
    }
  }
  useEffect(() => {
    reloadSideBar(user?.token, user?.userId).then(data => { if (data != undefined) setChats(data); })
  }, [content]);
  const searchHandle = async () => {
    getContext.setContentSideBar("Tìm kiếm")
    setChats([]);
  }
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
              <Link to={"message"}>
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
                    id="Chat"
                    className="nav-link text-white fs-5"
                    aria-current="page"
                    onClick={chatBoxHandle}
                  >
                    <i className="bi bi-chat-quote-fill"></i>
                    {Text && (
                      <span className="ms-3 d-none d-sm-inline">Đoạn chat</span>
                    )}
                  </a>
                </li></Link>
              <Link to={"search"}>
                <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                  <a
                    className="nav-link text-white fs-5"
                    aria-current="page"
                    onClick={searchHandle}
                  >
                    <i className="bi bi-search"></i>
                    {Text && (
                      <span className="ms-3 d-none d-sm-inline">Tìm kiếm</span>
                    )}
                  </a>
                </li>
              </Link>
              <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                <a
                  className="nav-link text-white fs-5"
                  aria-current="page"
                  onClick={() => getContext.setContentSideBar("Thông báo")}
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
                  onClick={() => getContext.setContentSideBar("Tin nhắn chờ")}
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
                  {Text && (
                    <span className="d-none d-sm-inline"> Cài đặt</span>
                  )}
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
        <Col>
        </Col>
      </Row>
    </Container >

  );
}
export default SideBar;
