import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/Home/HomePage'
import Register from '~/Pages/Auth/Register'
import Login from '~/Pages/Auth/Login'
import ForgotPassword from './Pages/Auth/ForgotPassword'
import ResetPassword from './Pages/Auth/ResetPassword'
import MessageForgotPassword from './Components/MessageForgotPassword'
import PageNotFound from './Pages/PageNotFound'
import Profile from './Pages/profile'
import ChatPage from './Pages/Chat/ChatPage'
import MyChat from './Pages/Chat/SideBarChat/Screens/MyChat'
import ChatSide from './Components/ChatSide'
import Search from './Components/Search'

export default function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<Login />} />
          <Route path="sign-up" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password/:id/:token" element={<ResetPassword />} />
          <Route path="send-email" element={<MessageForgotPassword />} />
        </Route>
        <Route path="/chat" element={<ChatPage />}>
          <Route index element={<MyChat />} />
          <Route path="*" element={<MyChat />} >
            <Route path="message" element={<ChatSide />} />
            <Route path="Search" element={<Search />} />
          </Route>
        </Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div >
  )
}
