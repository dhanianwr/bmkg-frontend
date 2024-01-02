import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/img/slide1.jpg';
import img2 from '../assets/img/slide2.jpg';
import img3 from '../assets/img/slide3.jpg';

function CarouselComp() {
  return (
    <Carousel className='pt-5' id="bg-carousel">
      <Carousel.Item>
        <img
          className="d-block" id='carousel-gambar'
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption className='tulisan-carousel'>
          <h2>First slide label</h2>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img 
          className="d-block" id="carousel-gambar"
          src={img2}
          alt="Second slide"
        />
        <Carousel.Caption className='tulisan-carousel'>
          <h2>Second slide label</h2>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img 
          className="d-block" id="carousel-gambar"
          src={img3}
          alt="Third slide"
        />
        <Carousel.Caption className='tulisan-carousel'>
          <h2>Third slide label</h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    
  );
}

export default CarouselComp;