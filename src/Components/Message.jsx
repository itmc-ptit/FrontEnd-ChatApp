import { React } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/App.css";
import { Alert } from "react-bootstrap";

export default function Message(props) {
  const { msg, variant } = props;
  return (
    <>
      <Alert variant={variant}> {msg}</Alert>
    </>
  );
}
