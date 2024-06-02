/* eslint-disable indent */
import { ChatState } from "~/Context/ChatProvider";
import UserComponent from "./UserComponent";
import { useEffect, useState } from "react";

export default function ChatSide() {
    const { chats } = ChatState();
    const [data, setData] = useState([]);
    useEffect(() => {
        if (chats != undefined) {
            const req = chats.map((element, i) => {
                return (<UserComponent key={i} id={element.chatId} name={element.name} photo={element.photo} lastMessage={element.latestMessage} />)
            })
            setData(req);
        }
    }, [data, chats])
    return (
        <>
            <div>
                {data}
            </div>
        </>
    )
}