
import "../assets/css/userComponent.css";
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import { ChatState } from "~/Context/ChatProvider";
import { Link } from "react-router-dom";


export default function UserComponent(props) {
  const { id, name, photo, lastMessage } = props;
  // console.log(props);
  const { setSelectChat } = ChatState();
  const handle = () => {
    setSelectChat({ id: id, name: name, photo: photo });
    // console.log({ id: id, name: name, photo: photo })
  }

  return (
    <>
      <ListGroup.Item
        as="li"
        key={id}
        className="d-flex justify-content-between align-items-start"
      // style={{}}
      >
        <Link
          style={
            {
              width: "100%",
              backgroundColor: "white",
              zIndex: "1",
              textDecoration: "none"
            }
          }
          to={"/chat/message?chatRoomId=" + id}
          onClick={handle}
          className="d-flex justify-content-between align-items-start">
          <div className="profile-down">
            <Image src={photo} style={{ width: "60px", height: "auto" }} roundedCircle />
          </div>
          <div className="ms-2 me-auto">
            <div className="fw-bold">{name}</div>
            <div style={{
              color: (lastMessage == "Chưa có tin nhắn" ? "#65676B" : "black")
            }
            }>
              {lastMessage}
            </div>
          </div>
          <Badge bg="primary" pill>
            {""}
          </Badge>
        </Link>
      </ListGroup.Item >
      {/* <ListGroup>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="profile-down">
            {" "}
            <Image src={avatar} fluid />{" "}
          </div>
          <div className="ms-2 me-auto">
            <div className="fw-bold">Your name</div>
            Cras justo odiođwdwdwdwdwdwdwdw
          </div>
          <Badge bg="primary" pill>
            14
          </Badge>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="profile-down">
            {" "}
            <Image src={avatar} fluid />{" "}
          </div>
          <div className="ms-2 me-auto">
            <div className="fw-bold">Your nameee</div>
            dwoifjewife fewfwef wqf e
          </div>
          <Badge bg="primary" pill>
            14
          </Badge>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="profile-down">
            {" "}
            <Image src={avatar} fluid />{" "}
          </div>
          <div className="ms-2 me-auto">
            <div className="fw-bold">Name</div>
            Messages
          </div>
          <Badge bg="primary" pill>
            14
          </Badge>
        </ListGroup.Item>
      </ListGroup> */}
    </>
  );
}
