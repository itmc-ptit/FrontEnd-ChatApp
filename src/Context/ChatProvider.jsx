import { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

const ChatContext = createContext({})
const ChatProvider = ({ children }) => {
  const [user, setUser] = useState({}) // thông tin user
  const [selectChat, setSelectChat] = useState({}) // dùng đẻ hiển thị chat đang được chọn
  const [notifications, setNotifications] = useState([]) // thông báo khi có tin nhắn mới
  const [chats, setChats] = useState([]) // danh sách chat của mình
  const navigate = useNavigate()
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('User'))
    if (!userInfo.token) {
      navigate('/')
    } else {
      navigate('/chat')
    }
    setUser(userInfo)
  }, [navigate])
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
