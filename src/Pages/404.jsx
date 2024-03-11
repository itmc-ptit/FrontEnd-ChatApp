import {Container} from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import notFound404 from '../../public/assets/img/notFound404.jpg';


export default function PageNotFound() {
  return (
    <>      
      <section id="notFound" className='block notFound-block'>
        <Container fluid>
            <div style = {{ paddingTop: "10vh", textAlign:"center"}}>
              <Image src={notFound404} fluid />      
            </div>
            <div className='title-holder'>
              <h2 style={{ paddingTop: "10vh", fontSize: "100px", textAlign: "center" }}>
                S O R R Y</h2>
              <div style={{textAlign:"center"}} className='subtitle' >The page not found!!!</div>
            </div>           
        </Container>
      </section>      
    </>
  )
}
