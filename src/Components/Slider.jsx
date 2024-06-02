import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/App.css";

export function Slider() {
  const url_img = [
    "https://img.freepik.com/free-vector/customer-service-concept-illustration_114360-22120.jpg?t=st=1709773106~exp=1709776706~hmac=31da62b0e7c6b4c12e7afb62d8a4b97022d59b1dc637d7c8b254967d02d1fbd8&w=740",
    "https://img.freepik.com/free-vector/get-touch-concept-illustration_114360-2646.jpg?t=st=1709776863~exp=1709780463~hmac=84bee7f7f9a7a42aff8d27e7192e058800256b280caa8ceb7d69147437e88325&w=740",
  ];
  const res = [];
  for (var i = 0; i < url_img.length; i++) {
    res.push(
      <MDBCarouselItem itemId={i + 1} key={i + 1}>
        <img src={url_img[i]} className="d-block w-100" alt="..." />
      </MDBCarouselItem>
    );
  }
  return (
    <MDBCarousel interval={3000} wrap="true">
      {res}
    </MDBCarousel>
  );
}
