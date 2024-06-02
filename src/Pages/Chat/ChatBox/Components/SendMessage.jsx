import { Button, Col, Form, Row } from "react-bootstrap";
import "~/assets/css/Sidemenubar.css";
import "@flaticon/flaticon-uicons/css/all/all.css";
import { useContext, useState } from "react";
import axios from "axios";
import { ChatState } from "~/Context/ChatProvider";
import { chatContext } from "../../ChatPage";

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) { return pair[1]; }
  }
  return (false);
}

function SendMessage() {
  const [text, setText] = useState("");
  const { user } = ChatState();
  const { socket } = useContext(chatContext);
  const handleText = (event) => setText(event.target.value);
  const handleButton = async () => {
    const getParams = getQueryVariable('chatRoomId');
    const headers = { 'Authorization': user?.token };
    if (text.trim() != "") await axios.post(`http://localhost:4000/api/messages/${getParams}`, { content: text }, { headers })
    else alert("Hệ thống: Bạn không được để trống ô nhập tin nhắn");
    setText("");
    socket.emit("send_message");
    document.getElementById('textInput').value = "";
  }
  return (
    <div
      style={{
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
            onChange={handleText}
            id="textInput"
            placeholder="Aa"
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
              color: "#4A55A2"
            }}
            onClick={handleButton}
          >
            <i className="fi fi-rr-paper-plane-top"></i>
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default SendMessage;
