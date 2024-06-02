import { createContext, useContext, useEffect, useState } from 'react'

const ChatContext = createContext({})
const ChatProvider = ({ children }) => {
  const [user, setUser] = useState(null) // thông tin user
  const [selectChat, setSelectChat] = useState({ id: -1, name: "ERROR", photo: `https://ui-avatars.com/api/?name=${("null").replace(' ', '+')}&background=random` }) // dùng đẻ hiển thị chat đang được chọn
  const [notifications, setNotifications] = useState([]) // thông báo khi có tin nhắn mới
  const [chats, setChats] = useState([]) // danh sách chat của mình
  const [content, setContent] = useState([]); // Đoạn chat
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('User'))
    setUser(userInfo)
  }, [])
  return (
    <ChatContext.Provider
      value={{
        user,
        chats,
        content,
        setUser,
        setChats,
        setContent,
        selectChat,
        setSelectChat,
        notifications,
        setNotifications
      }}
    >
      {children}
    </ChatContext.Provider>
  )
}
const ChatState = () => {
  return useContext(ChatContext)
}
export { ChatProvider, ChatState }
