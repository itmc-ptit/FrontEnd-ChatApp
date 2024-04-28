import { Image, Navbar } from 'react-bootstrap'
import { ChatState } from '~/Context/ChatProvider'

function NavBarChat() {
  const { user } = ChatState()
  return (
    <Navbar
      style={{
        height: '10vh',
        backgroundColor: '#fff',
        boxShadow: '0px 0px 25px 0px rgba(0,0,0,0.1)',
        WebkitBoxShadow: '0px 0px 25px 0px rgba(0,0,0,0.2)'
      }}
    >
      <Image
        src={
          user?.avatar !== null
            ? user?.avatar
            : 'https://ui-avatars.com/api/?name=Nguyen+Thanh+Vinh&background=4A55A2&color=fff'
        }
        style={{
          height: '36px',
          position: 'relative',
          top: '0',
          left: '25px'
        }}
        rounded
      />
      <Navbar.Text
        style={{
          fontSize: '1rem',
          height: '10vh',
          position: 'relative',
          top: '0',
          left: '25px'
        }}
      >
        <span style={{ margin: '0', position: 'relative' }} className="ms-3">
          {user?.name}
          <span
            style={{
              fontSize: '12px',
              position: 'absolute',
              bottom: '-1.5rem',
              left: '10px'
            }}
          >
            <i
              style={{
                position: 'absolute',
                fontSize: '36px',
                color: 'green',
                bottom: '-20px',
                left: '-25px'
              }}
              className="bi bi-dot"
            ></i>
            Online
          </span>
        </span>
      </Navbar.Text>
    </Navbar>
  )
}

export default NavBarChat
