import { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Outlet, useNavigate } from 'react-router'
import { Slider } from '~/Components/Slider'
import { ChatState } from '~/Context/ChatProvider'
function Home() {
  const navigate = useNavigate()
  const { user } = ChatState()
  // console.log('user', user)
  useEffect(() => {
    if (user) {
      navigate('/chat')
      return
    }
  }, [user])
  return (
    <Container fluid className="Container">
      <Row>
        <Col className="col1">
          <Slider />
        </Col>
        <Col className="col2">
          <Outlet />
        </Col>
      </Row>
    </Container>
  )
}

export default Home
