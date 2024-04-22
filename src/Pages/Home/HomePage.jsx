import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router";
import { Slider } from "~/Components/Slider";
function Home() {
  const token = JSON.parse(localStorage.getItem("User"));
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate("/chat");
    }
  }, [token]);
  return (
    <Container fluid className="Container">
      <Row>
        <Col xs={6} sm={6} lg={6} className="col1">
          <Slider />
        </Col>
        <Col xs={6} sm={6} lg={6} className="col2">
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
