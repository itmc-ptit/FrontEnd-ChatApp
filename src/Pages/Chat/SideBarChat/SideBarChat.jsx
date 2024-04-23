import { Outlet } from 'react-router'
import SideBar from './Components/SideBar'

function SideBarChat() {
  return (
    <div className="flex">
      <SideBar />
      <Outlet />
    </div>
  )
}

export default SideBarChat
