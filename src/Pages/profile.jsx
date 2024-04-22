import Image from "react-bootstrap/Image";
import avatar from "../../public/assets/img/avatar.jpg";
import "../assets/css/profile.css";
import { Container } from "react-bootstrap";
import BUT1 from "../Components/firstButton";
import BUT2 from "../Components/secButton";
import BUT3 from "../Components/thirdButton";
export default function Profile() {
  return (
    <>
      <Container>
        <div xs={2} md={4} lg={6} className="upc">
          <div className="gradiant"></div>
          <div
            style={{
              paddingRight: "15px",
              textAlign: "Right",
              fontSize: "15px",
            }}
            class="col"
          >
            <BUT1>Edit</BUT1>
          </div>
          <div style={{ textAlign: "center" }} className="profile-down">
            <Image src={avatar} fluid />
            <div className="profile-title">@llinzie</div>
            <div className="profile-description">
              /This line is used for BIO/
            </div>
          </div>
        </div>
      </Container>

      <Container style={{ paddingTop: "15px" }}>
        <div className="upc">
          <div className="row">
            <div
              style={{ textAlign: "left", fontSize: "18px", fontWeight: "600" }}
              class="col"
            >
              Personal Information
            </div>

            <div style={{ textAlign: "Right", fontSize: "15px" }} class="col">
              <BUT2></BUT2>
            </div>
          </div>

          <div class="container text-left">
            <div style={{ color: "gray" }} class="row">
              <div style={{ fontSize: "17px" }} class="col">
                First Name
              </div>
              <div style={{ fontSize: "17px" }} class="col">
                Last Name
              </div>
            </div>

            <div class="row">
              <div class="col">Thanh</div>
              <div class="col">Dinh</div>
            </div>

            <div style={{ color: "gray" }} class="row">
              <div style={{ fontSize: "17px" }} class="col">
                Email Address
              </div>
              <div style={{ fontSize: "17px" }} class="col">
                Phone
              </div>
            </div>

            <div class="row">
              <div class="col">nt225@gmail.com</div>
              <div class="col">0123456789</div>
            </div>

            <div style={{ color: "gray" }} class="row">
              <div style={{ fontSize: "17px" }} class="col">
                Birthday
              </div>
              <div style={{ fontSize: "17px" }} class="col">
                Gender
              </div>
            </div>

            <div class="row">
              <div class="col">12/30/2005</div>
              <div class="col">Female</div>
            </div>
          </div>
        </div>
      </Container>

      <Container style={{ paddingTop: "15px" }}>
        <div className="upc">
          <div class="row">
            <div
              style={{ textAlign: "left", fontSize: "18px", fontWeight: "600" }}
              class="col"
            >
              Security
            </div>

            <div style={{ textAlign: "Right", fontSize: "15px" }} class="col">
              <BUT3></BUT3>
            </div>
          </div>

          <div class="container text-left">
            <div style={{ color: "gray" }} class="row">
              <div style={{ fontSize: "17px" }}>Your password</div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
