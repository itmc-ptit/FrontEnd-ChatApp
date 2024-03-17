import Image from 'react-bootstrap/Image';
import avatar from '../../public/assets/img/avatar.jpg';
import "../assets/css/profile.css";
import React from 'react';
import { Container } from 'react-bootstrap';

export default function Profile(){
  return (
    <>
      <Container>
        <div xs={2} md={4} lg={6} className='upc'>
          <div className="gradiant"></div>
          <div style={{paddingRight: "15px",textAlign: "Right", fontSize:"15px"}} class="col" >
              <button>Edit</button>
            </div>          
          <div style={{textAlign:"center"}}className="profile-down">
            <Image src={avatar} fluid/>
            <div className="profile-title">@llinzie</div>
            <div className="profile-description">
              /This line is used for BIO/ 
            </div>
          </div>
        </div>
      </Container>
    
      <Container style={{paddingTop: "15px"}}>
        <div className='upc'>    
          <div class="row">      
     
            <div style={{textAlign: "left", fontSize:"18px", fontWeight:"600"}} class="col" >
              Personal Information
            </div>
            
            <div style={{textAlign: "Right", fontSize:"15px"}} class="col" >
              <button>Edit</button>
            </div>
          </div> 

          <div class="container text-left">

            <div style={{color:"gray"}} class="row">
              <div style ={{fontSize:"17px"}} class="col">
                First Name
              </div>
              <div style ={{fontSize:"17px"}} class="col">
                Last Name
              </div>
            </div>

            <div class="row">
              <div class="col">
                Thanh
              </div>
              <div class="col">
                Dinh
              </div>
            </div>

            <div style={{color:"gray"}} class="row">
              <div style ={{fontSize:"17px"}} class="col">
                Email Address
              </div>
              <div style ={{fontSize:"17px"}} class="col">
                Phone
              </div>
            </div>

            <div class="row">
              <div class="col">
                nt225@gmail.com
              </div>
              <div class="col">
                0948872762
              </div>
            </div>

            <div style={{color:"gray"}} class="row">
              <div style ={{fontSize:"17px"}} class="col">
                Birthday
              </div>
              <div style ={{fontSize:"17px"}} class="col">
                Sex
              </div>
            </div>

            <div class="row">
              <div class="col">
                22/05/2005
              </div>
              <div class="col">
                Female
              </div>
            </div>

          </div>
        </div>
      </Container>

      <Container style={{paddingTop: "15px"}}>
        <div className='upc'>
          <div class="row">      
            <div style={{textAlign: "left", fontSize:"18px", fontWeight:"600"}} class="col" >Address</div>
            
            <div style={{textAlign: "Right", fontSize:"15px"}} class="col" >
              <button>Edit</button>
            </div>
          </div> 

          <div class="container text-left">

            <div style={{color:"gray"}} class="row">
              <div style ={{fontSize:"17px"}} class="col">
                Country
              </div>
              <div style ={{fontSize:"17px"}} class="col">
                City/State
              </div>
            </div>

            <div class="row">
              <div class="col">
                Vietnam
              </div>
              <div class="col">
                Hanoi
              </div>
            </div>

          </div>
        </div>
      </Container>

    </>
  )
}