import { Container } from "react-bootstrap";
import MessageContainer from "./Components/MessageContainer";
import NavBarChat from "./Components/NavBarChat";
import SendMessage from "./Components/SendMessage";

function ChatBox() {
  return (
    <Container fluid>
      <NavBarChat />
      <MessageContainer />
      <SendMessage />
    </Container>
  );
}

export default ChatBox;
