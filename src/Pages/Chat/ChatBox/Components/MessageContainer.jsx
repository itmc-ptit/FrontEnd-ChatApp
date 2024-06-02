/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import ChatBox from "~/Components/ChatBox";
import { ChatState } from "~/Context/ChatProvider";
import { css } from '@emotion/react';

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) { return pair[1]; }
  }
  return (false);
}

function formatDate(date) {
  return (date < 10) ? '0' + date : date;
}

export async function reloadContent(token, userId) {
  try {
    const params = (getQueryVariable('chatRoomId')[0] === undefined) ? 0 : getQueryVariable('chatRoomId');
    const headers = { 'Authorization': token };
    const getMessage = [];
    await axios.get(`http://localhost:4000/api/messages/${params}`, { headers }).then(response => {
      if (response.status == "200") {
        const getData = response?.data;
        getData.forEach((data) => {
          let date = new Date(data?.updatedAt);
          date = `${formatDate(date.getUTCDate())}/${formatDate(date.getMonth() + 1)}/${date.getFullYear()} - ${formatDate(date.getHours())}:${formatDate(date.getMinutes())}:${formatDate(date.getSeconds())}`;
          // getMessage.push(<ChatBox content={data?.content} name={(userId !== data?.from?.userId) ? data?.from?.name : data?.from?.name + " (bạn)"} photo={data?.from?.avatar === null ? `https://ui-avatars.com/api/?name=${(data?.from?.name.replaceAll(' ', '+'))}&background=random` : data?.from?.avatar} UpdateAt={date} />)
          getMessage.push({
            content: data?.content,
            name: (userId !== data?.from?.userId) ? data?.from?.name : data?.from?.name + " (bạn)",
            photo: data?.from?.avatar === null ? `https://ui-avatars.com/api/?name=${(data?.from?.name.replaceAll(' ', '+'))}&background=random` : data?.from?.avatar,
            UpdateAt: date
          })
        })
      }
    });

    return getMessage;
  } catch (error) {
    //
  }
}

function MessageContainer() {
  const { selectChat, user, content, setContent } = ChatState();
  const [data, setData] = useState([]);
  const scrollToBottom = (id) => {
    const element = document.getElementById(id);
    element.scrollTop = element.scrollHeight;
  }
  const getContent = () => {
    try {
      setContent([])
      reloadContent(user?.token, user?.userId).then(data => {
        setContent(data);
        if (content != undefined) {
          const req = content.map((element, i) => {
            return (<ChatBox key={i} content={element.content} name={element.name} photo={element.photo} updatedAt={element.updatedAt} />)
          })
          setData(req);
        }
      });
      // console.log(data);
    } catch (error) {
      //
    }
  }
  useEffect(() => {
    getContent();
    scrollToBottom('messageText');
  }, [data, selectChat])
  return (
    <div
      id="messageText"
      style={{
        width: "auto",
        minHeight: "81.5vh",
        maxHeight: "81.5vh",
        background: "#fff",
        margin: "0",
        overflow: "hidden",
        overflowY: "scroll"
      }}
    >
      {data}
    </div >
  );
}

export default MessageContainer;
