import { Container, Navbar } from "react-bootstrap";

function MyChat() {
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
        <h3 style={{ width: "100%", textAlign: "center" }}>Các tin nhắn</h3>
      </Navbar>
    </Container>
  );
}

export default MyChat;
