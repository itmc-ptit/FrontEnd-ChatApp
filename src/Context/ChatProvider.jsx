import { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

const ChatContext = createContext({})
const ChatProvider = ({ children }) => {
  const [user, setUser] = useState(null) // thông tin user
  const [selectChat, setSelectChat] = useState({}) // dùng đẻ hiển thị chat đang được chọn
  const [notifications, setNotifications] = useState([]) // thông báo khi có tin nhắn mới
  const [chats, setChats] = useState([]) // danh sách chat của mình
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('User'))
    setUser(userInfo)
  }, [])
  return (
    <ChatContext.Provider
      value={{
        user,
        setUser,
        chats,
        setChats,
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
