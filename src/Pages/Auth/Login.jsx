import axios from "axios";
import { Button, Row, Col, Form, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "~/assets/css/App.css";
import Message from "~/Components/Message";
import { Slider } from "~/Components/Slider";

function Login() {
  // const http = axios.create({
  //   baseURL: "http:localhost:4000",
  //   timeout: 10000,
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });
  const [Eyes, setEyes] = useState(false);
  const [User, setUser] = useState("");
  const [Pwd, setPwd] = useState("");
  const handleUserChange = (event) => setUser(event.target.value);
  const handlePwdChange = (event) => setPwd(event.target.value);
  const navigate = useNavigate();
  const Error_Message = (data) => {
    const container = document.getElementById("Message");
    const mess = createRoot(container);
    mess.render(<Message msg={data} variant="danger" />);
  };
  const SubmitHandler = async () => {
    if (!User || !Pwd) {
      Error_Message("Vui lòng nhập đủ tài khoản và mật khẩu");
      return;
    }
    try {
      // console.log(JSON.stringify({ email: User, password: Pwd }));
      const response = await axios.post("http://localhost:4000/api/login", {
        email: User,
        password: Pwd,
      });
      const userData = response.data;
      if (response.status == 200 && userData.data.token) {
        localStorage.setItem(
          "User",
          JSON.stringify({
            token: "Bearer " + userData.data.token,
            name: userData.data.name,
            email: userData.data.email,
            avatar: userData.data.avatar,
          })
        );
        navigate("/chat");
      } else {
        Error_Message("Tài khoản hoặc mật khẩu không đúng, vui lòng thử lại");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        Error_Message(error.response.data.message);
        throw new Error(error.response.data.message);
      }
      Error_Message(error.message);
      throw new Error(error.message);
    }
  };
  // const getUserInformation = async (id) => {
  //   const config = {
  //     headers: {
  //       Authorization: `${JSON.parse(localStorage.getItem("User")).token}`,
  //     },
  //   };
  // };
  //   const { data } = await axios.get(
  //     `http://localhost:4000/api/users/${id}`,
  //     config
  //   );
  //   return data;
  // };
  // getUserInformation(1).then((data) => console.log(data));
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
        Đăng nhập
      </Form.Label>
      <div className="panel2">
        <Row className="row2">
          <Form.Label column sm={3}>
            Tài khoản
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              id="text-account"
              type="text"
              placeholder="Email"
              onChange={handleUserChange}
              value={User}
              autoFocus
            />
          </Col>
          <Form.Label column sm={3}>
            Mật khẩu
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              id="text-password"
              type={Eyes ? "text" : "password"}
              placeholder="Mật khẩu"
              onChange={handlePwdChange}
              value={Pwd}
            />
            <div
              onClick={() => setEyes(!Eyes)}
              style={{ right: "5%", top: "44%", position: "absolute" }}
            >
              {Eyes ? (
                <i className="bi bi-eye-fill" />
              ) : (
                <i className="bi bi-eye-slash-fill" />
              )}
            </div>
          </Col>
          <Col sm={4}>
            <Link to="/forgotpassword">
              <Button
                style={{
                  textDecoration: "none",
                  padding: "0",
                }}
                variant="link"
              >
                Quên mật khẩu?
              </Button>
            </Link>
          </Col>
          <Col sm={8}>
            <Button variant="outline-primary" onClick={SubmitHandler}>
              Đăng nhập
            </Button>
            <Link to="/sign-up">
              <Button variant="outline-success">Đăng ký</Button>
            </Link>
          </Col>
          <div id="Message"></div>
        </Row>
      </div>
    </>
  );
}
export default Login;
// export default function UI() {
//   let UIX;
//   try {
//     const navigate = useNavigate();
//     JSON.parse(localStorage.getItem("User")).token;
//     useEffect(() => {
//       navigate("/chat");
//     }, []);
//   } catch (error) {
//     UIX = (
//       <>
//         <Container fluid className="Container">
//           <Row>
//             <Col xs={6} sm={6} lg={6} className="col1">
//               <Slider />
//             </Col>
//             <Col xs={6} sm={6} lg={6} className="col2">
//               <Login />
//             </Col>
//           </Row>
//         </Container>
//       </>
//     );
//   }
//   return UIX;
// }
