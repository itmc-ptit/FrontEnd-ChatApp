import { Button } from "react-bootstrap";
import Message from "./Message";
import { Link } from "react-router-dom";

export default function MessageForgotPassword() {
  return (
    <>
      <div
        style={{
          textAlign: "center",
          padding: "15%",
        }}
      >
        <Message
          msg="Mật khẩu đã được gửi vào email của bạn"
          variant="success"
        />
        <Link to="/">
          <Button variant="primary">Trở về</Button>
        </Link>
      </div>
    </>
  );
}
