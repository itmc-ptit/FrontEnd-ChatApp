/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from 'react'
import ChatBox from './ChatBox/ChatBox'
import SideBarChat from './SideBarChat/SideBarChat'
import { useNavigate } from 'react-router'
import { ChatState } from '~/Context/ChatProvider'
import { io } from 'socket.io-client'
import { reloadSideBar } from './SideBarChat/Components/SideBar'
import { reloadContent } from './ChatBox/Components/MessageContainer'
export const chatContext = createContext();
const socket = io.connect("http://localhost:4000");
function ChatPage() {
  const [contentSideBar, setContentSideBar] = useState("Tin nhắn");
  const navigate = useNavigate()
  const { chats, user, setChats, setContent } = ChatState();
  useEffect(() => {
    if (!user) {
      navigate('/')
      return
    }
    setChats([{ chatId: 0, name: "Web App: Chat With Me" }]) // mỗi khi có sự thay đổi chats thì function này rerender lại
  }, [user])
  const reload = async () => {
    await reloadSideBar(user?.token, user?.userId).then(data => setChats(data));
    await reloadContent(user?.token, user?.userId).then(data => setContent(data));
  }
  useEffect(() => {
    socket.on("receive_message", reload)
  }, [socket])
  return (
    <chatContext.Provider value={{
      contentSideBar,
      setContentSideBar,
      socket
    }}>
      <div>
        <SideBarChat />
        <ChatBox />
      </div>
    </chatContext.Provider>

  )
}
export default ChatPage
