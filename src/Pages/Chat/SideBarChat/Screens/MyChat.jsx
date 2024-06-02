/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { Container, ListGroup, Navbar } from "react-bootstrap";
import { chatContext } from "../../ChatPage";
import { ChatState } from "~/Context/ChatProvider";
import UserComponent from "~/Components/UserComponent";
import ChatSide from "~/Components/ChatSide";
import { Outlet } from "react-router";

function MyChat() {
  const { contentSideBar } = useContext(chatContext);
  const { chats } = ChatState();
  const handle = () => {
    if (contentSideBar == "Đoạn chat") {
      console.log(<ChatSide />)
    }
    else {
      console.log(contentSideBar)
    }
  }
  return (
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
        <h3 style={{ width: "100%", textAlign: "center" }}>{contentSideBar}</h3>
      </Navbar>
      <div>
        <ListGroup as="ul" >
          <Outlet />
        </ListGroup>
      </div>
    </Container >
  );
}

export default MyChat;
