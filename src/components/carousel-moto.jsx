import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const CarouselBerita = ( props ) => {
  return (
    <div>
        <Carousel>
            <Carousel.Item>
                <img className='gambar-moto'
                src={props.image} />
            </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default CarouselBerita