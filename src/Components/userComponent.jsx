import React from 'react';
import "../assets/css/userComponent.css";
import avatar from '../../public/assets/img/avatar.jpg';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

const start = Date.now();

export default function USER (){
    return (
        <>

<ListGroup>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        
        <div className="profile-down">  <Image src={avatar} fluid/> </div>
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
        
        <div className="profile-down">  <Image src={avatar} fluid/> </div>
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
        
        <div className="profile-down">  <Image src={avatar} fluid/> </div>
        <div className="ms-2 me-auto">
          <div className="fw-bold">Name</div>
          Messages
        </div>
        <Badge bg="primary" pill>
          14
        </Badge>
      </ListGroup.Item>
    </ListGroup>
       </>
    )
}