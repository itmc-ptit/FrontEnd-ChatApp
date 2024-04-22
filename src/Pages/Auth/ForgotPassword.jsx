import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/App.css";
import { Col, Row, Container, Form, Button } from "react-bootstrap";
import { Slider } from "../../Components/Slider";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ForgotPassword() {
  const [Account, setAccount] = useState("");
  const handleAccountChange = (event) => setAccount(event.target.value);
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/forgot-password",
        {
          email: Account,
        }
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
        Quên mật khẩu
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
            Tìm tài khoản của bạn
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
            Vui lòng nhập tài khoản để tìm kiếm lại mật khẩu của bạn.
          </p>
          <div
            style={{
              margin: "0 5%",
            }}
          >
            <Col sm={12}>
              <Form.Control
                id="text-account"
                type="text"
                placeholder="Tài khoản"
                onChange={handleAccountChange}
                value={Account}
                autoFocus
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
          <Link to="/send-email">
            <Button
              variant="outline-primary"
              style={{
                margin: "2% 5%",
                float: "right",
              }}
              onClick={handleSubmit}
            >
              Tìm tài khoản
            </Button>
          </Link>
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
export default ForgotPassword;
// export default function UI() {
//   return (
//     <>
//       <Container fluid className="Container">
//         <Row>
//           <Col xs={6} sm={6} lg={6} className="col1">
//             <Slider />
//           </Col>
//           <Col xs={6} sm={6} lg={6} className="col2">
//             <PanelForgotPassword />
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// }
