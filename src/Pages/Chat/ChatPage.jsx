import { useEffect } from 'react'
import ChatBox from './ChatBox/ChatBox'
import SideBarChat from './SideBarChat/SideBarChat'
import { useNavigate } from 'react-router'
import { ChatState } from '~/Context/ChatProvider'

function ChatPage() {
  const navigate = useNavigate()
  const { chats, user, setChats } = ChatState()

  useEffect(() => {
    setChats([1, 2, 3]) // mỗi khi có sự thay đổi chats thì function này rerender lại
  }, [])
  console.log(chats)
  return (
    <div>
      <SideBarChat />
      <ChatBox />
    </div>
  )
}

export default ChatPage
