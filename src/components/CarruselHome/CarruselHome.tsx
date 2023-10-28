import { Carousel } from "react-bootstrap"

const carruselHome = () => {
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        <img 
        className="d-block w-100"
        style={{maxHeight: "500px", objectFit: 'cover'}}
        src="/assets/images/slide1.jpg" 
        alt="imagen carrusel"  />
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img 
        className="d-block w-100"
        style={{maxHeight: "500px", objectFit: 'cover'}}
        src="/assets/images/slide2.jpg" 
        alt="imagen carrusel"  />
      </Carousel.Item>

      <Carousel.Item interval={3000}>
      <img 
        className="d-block w-100"
        style={{maxHeight: "500px", objectFit: 'cover'}}
        src="/assets/images/slide3.jpg" 
        alt="imagen carrusel"  />
      </Carousel.Item>
    </Carousel>
  )
}

export default carruselHome