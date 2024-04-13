import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/App.css";
import { Col, Row, Container, Form, Button } from "react-bootstrap";
import { Slider } from "../Components/Slider";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function PanelResetPassword(props) {
  const id = props.id;
  const token = props.token;
  const [Newpassword, setNewpassword] = useState({
    password: "",
    confirmPassword: "",
  });
  const handleNewpasswordChange = (e) => {
    const { name, value } = e.target;
    setNewpassword({ ...Newpassword, [name]: value });
  };
  const handleSubmit = async () => {
    try {
      console.log(`http://localhost:4000/api/reset-password/${id}/${token}`);
      console.log(JSON.stringify(Newpassword));
      const response = await axios.post(
        `http://localhost:4000/api/reset-password/${id}/${token}`,
        Newpassword
      );
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Form.Label
        style={{
          paddingTop: "10vh",
          fontSize: "60px",
          textAlign: "center",
          width: "100%",
        }}
      >
        Tạo lại mật khẩu
      </Form.Label>
      <div
        className="panel"
        style={{
          marginTop: "10vh",
          width: "100%",
          height: "auto",
          borderRadius: "10px",
        }}
      >
        <div
          className="header-panel"
          style={{
            borderBottom: "1px solid #BEC3C9",
          }}
        >
          <Form.Label
            style={{
              width: "100%",
              textAlign: "center",
              fontSize: "24px",
              margin: "0",
              padding: "2% 0",
            }}
          >
            Tạo mật khẩu mới
          </Form.Label>
        </div>
        <div
          style={{
            fontSize: "24px",
            borderBottom: "1px solid #BEC3C9",
            height: "55%",
          }}
        >
          <p
            style={{
              textAlign: "center",
              fontSize: "20px",
            }}
          >
            Vui lòng nhập mật khẩu mới cho tài khoản của bạn.
          </p>
          <div
            style={{
              margin: "0 5%",
            }}
          >
            <Col sm={12}>
              <Form.Control
                id="text-account"
                type="password"
                placeholder="Mật khẩu"
                onChange={handleNewpasswordChange}
                value={Newpassword.password}
                name="password"
                autoFocus
              />
            </Col>
            <Col sm={12}>
              <Form.Control
                id="text-account"
                type="password"
                placeholder="Nhập lại mật khẩu"
                onChange={handleNewpasswordChange}
                value={Newpassword.confirmPassword}
                name="confirmPassword"
              />
            </Col>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: "20%",
            display: "inline-block",
          }}
        >
          <Button
            variant="outline-primary"
            style={{
              margin: "2% 5%",
              float: "right",
            }}
            onClick={handleSubmit}
          >
            Đổi lại mật khẩu
          </Button>
          <Link to="/sign-in">
            <Button
              variant="outline-danger"
              style={{
                margin: "2% 0%",
                float: "right",
              }}
            >
              Hủy
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default function UI() {
  const { id, token } = useParams();
  return (
    <>
      <Container fluid className="Container">
        <Row>
          <Col xs={6} sm={6} lg={6} className="col1">
            <Slider />
          </Col>
          <Col xs={6} sm={6} lg={6} className="col2">
            <PanelResetPassword id={id} token={token} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
