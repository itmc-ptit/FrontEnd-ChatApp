import React from 'react'
import { Container,Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import "./Sidemenubar.css"
import "bootstrap/js/dist/dropdown"

function SidebarMenu() {
  return (
    <>
    <Container style={{
      float:"left",
      padding:"0",
      }} >
      <Row>
        <div style={{
        backgroundColor:"#4A55A2",
        width:"230px"
      }} className='col-auto col-md-3 min-vh-100 d-flex justify-content-between flex-colum'>
        <div>
         <ul
          class="nav nav-pills flex-column"
         >
          <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
            <a href="#" class="nav-link text-white fs-5" aria-current="page">
            <i class="bi bi-chat-quote-fill"></i>
            <span className='ms-3 d-none d-sm-inline'>Đoạn chat</span>
                </a>
          </li>
          <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
            <a href="#" class="nav-link text-white fs-5" aria-current="page">
            <i class="bi bi-people-fill"></i>
            <span className='ms-3 d-none d-sm-inline'>Bạn bè</span>
                </a>
          </li>
          <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
            <a href="#" class="nav-link text-white fs-5" aria-current="page">
            <i class="bi bi-bell-fill"></i>
            <span className='ms-3 d-none d-sm-inline'>Thông báo</span>
                </a>
          </li>
          <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
            <a href="#" class="nav-link text-white fs-5" aria-current="page">
            <i class="bi bi-chat-dots-fill"></i>
            <span className='ms-3 d-none d-sm-inline'>Tin nhắn chờ</span>
                </a>
          </li>
          <hr/>
           <div class="dropdown open">
          <a
            class="btn btn-secondary dropdown-toggle text-white fs-9"
            type="button"
            id="triggerId"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{
              backgroundColor:"#4A55A2",
              border:"0px",
            }}
          >
           <i className='bi bi-gear'></i> Cài đặt
          </a>
          <div class="dropdown-menu" aria-labelledby="triggerId">
            <a class="dropdown-item" href="#">Hồ sơ của bạn</a>
            <a class="dropdown-item" href="#">Chế độ sáng/tối</a>
            <a class="dropdown-item" href="#" style={{color:"red"}} >Đăng xuất</a>
          </div>
         </div>
         </ul>
         </div>
        
         
        </div>
      </Row>
    </Container>
    </>
  )
}

export default function Chat() {  
 return (
  <SidebarMenu/>
 )
}
