import React from 'react'

import {Carousel} from 'react-bootstrap'
import Footer from '../Footer/Footer';
import './Gallery.css'





function Gallery() {

  
  return (
    <div className="back" >
    <h1>places you like to visit</h1>


    <Carousel>
  <Carousel.Item>
    <img
      className="im2"
      src="https://lonelyplanetimages.imgix.net/mastheads/GettyImages-143559567_high.jpg"
      alt="First slide" 
    />
    <Carousel.Caption>
      <h3>kolkata</h3>
      
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="im2"
      src="https://th.bing.com/th/id/R.045c8929761bf08810c2fe1561a481ab?rik=yFa0mAULaLjtgQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-X3mxyoCF8IQ%2fUWfpNhhoOLI%2fAAAAAAAAYiU%2fpecWKZS3yJk%2fs1600%2fBangalore%2bPalace.jpg&ehk=9eU4XodgIiEnikBKveY%2fnLzL21NPeRawzyhXwoW4X08%3d&risl=&pid=ImgRaw&r=0"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Bangalore</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="im2"
      src="https://www.transindus.co.uk/media/1399/tailormade-and-group-tour-india-highlight-red-fort-delhi-2.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>New-Delhi</h3>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="im2"
      src="https://blog.resellerclub.com/wp-content/uploads/2016/10/charminar.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Hydrabad</h3>
      
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="im2"
      src="https://www.rentomojo.com/blog/wp-content/uploads/2019/10/shutterstock_749994316.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Mumbai</h3>
      
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="im2"
      src="https://th.bing.com/th/id/OIP.CGErrtAEpWhQQANqjvf2ogHaEK?pid=ImgDet&rs=1"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Jaipur</h3>
      
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="im2"
      src="https://im.whatshot.in/img/2021/Jan/shutterstock-1046041228-1575359106-1610102372.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Goa</h3>
      
    </Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
    <img
      className="im2"
      src="https://www.fabhotels.com/blog/wp-content/uploads/2018/11/1000x650-45.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Ahemdabad</h3>
      
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="im2"
      src="https://th.bing.com/th/id/OIP.4xSReBaq8h_mBSFbH6YbBgHaE8?pid=ImgDet&rs=1"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Pune</h3>
      
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="im2"
      src="https://th.bing.com/th/id/OIP.Gxv31KF9vs-aESHhgwvFaQHaD4?pid=ImgDet&rs=1"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Chennai</h3>
      
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="im2"
      src="https://i2.wp.com/alpinelakestrek.com/wp-content/uploads/2020/03/Great-lakes-kashmir.jpg?fit=2048%2C1365&ssl=1"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Kashmir</h3>
      
    </Carousel.Caption>
  </Carousel.Item>




</Carousel>
    
<Footer/>


    
</div>

  )
}

export default Gallery;
 