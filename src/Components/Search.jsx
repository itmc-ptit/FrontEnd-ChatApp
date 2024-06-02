/* eslint-disable indent */
import axios from "axios";
import { useState } from "react";
import { Button, Col, Form, ListGroup, Row } from "react-bootstrap";
import { ChatState } from "~/Context/ChatProvider";
import UserComponent from "./UserComponent";

export default function Search() {
    const { user, chats, setChats } = ChatState();
    const headers = { 'Authorization': user?.token };
    const [text, setText] = useState('');
    const formHandle = (event) => {
        setChats([]);
        setText(event.target.value)
    }
    const buttonHandle = async () => {
        try {
            const req = await axios.get(`http://localhost:4000/api/users/${text}`, { headers })
            console.log(req?.data?.data);
            setChats([...chats, {
                chatId: req?.data?.data.userId,
                name: req?.data?.data.name,
                photo: req?.data?.data.avatar,
                lastestMessage: req?.data?.data.birth
            }])
        } catch (error) {
            //
        }
    }
    return (
        <>
            <Row>
                <Col sm={8} style={{ paddingLeft: "0" }}>
                    <Form.Control onChange={formHandle} value={text} type="text" placeholder="Aa" />
                </Col>
                <Col sm={4} style={{ paddingRight: "0" }}>
                    <Button variant="info" onClick={buttonHandle}>Tìm kiếm</Button>
                </Col>
            </Row>
            <ListGroup>
                {
                    chats.map((element, i) => {
                        console.log(i, element);
                        return (<UserComponent key={i} id={element.chatId} name={element.name} photo={element.photo} lastMessage={element.lastestMessage} />)
                    })
                }
            </ListGroup>
        </>
    )
}