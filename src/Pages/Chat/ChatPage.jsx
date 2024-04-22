import { useEffect } from "react";
import ChatBox from "./ChatBox/ChatBox";
import SideBarChat from "./SideBarChat/SideBarChat";
import { useNavigate } from "react-router";

function ChatPage() {
  const token = JSON.parse(localStorage.getItem("User"));
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token]);
  return (
    <div>
      <SideBarChat />
      <ChatBox />
    </div>
  );
}

export default ChatPage;
