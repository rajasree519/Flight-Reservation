import React from 'react'
import { Container,Carousel ,Row,Col} from 'react-bootstrap'
import Footer from '../Footer/Footer'
import './About.css'



function About() {
  return (
    <div className='abclr' pt-5>
      <h1 className='hclr'>About us</h1>
      <Row>
  <Col>
        <div>
        <Carousel>
  <Carousel.Item>
    <img
      className="im3"
      src="https://i.pinimg.com/originals/89/eb/85/89eb85eea30332abb53ad2b2c7fae29e.jpg"
      alt="First slide" 
    />
    
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="im3"
      src="https://www.careergeekblog.com/wp-content/uploads/2020/12/shutterstock_1321399355-700x467.jpg"
      
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="im3"
      src="https://globetrender.com/wp-content/uploads/2020/09/britishairways_21686651344722-scaled-e1600793302290-1024x542.jpg"
      
    />

    
  </Carousel.Item>

  
</Carousel>



        </div>
        </Col>
       
<Col>
    <div>
       
       <p  className='hclr1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
         software like Aldus PageMaker including versions of Lorem Ipsum.
         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
           when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently 
         with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

        </div>
        </Col>
      
      </Row>
      
      
<Footer/>
      
    </div>
  )
}

export default About