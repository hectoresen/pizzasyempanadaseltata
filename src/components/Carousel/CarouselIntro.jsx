import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './CarouselIntro.scss';

const CarouselIntro = () => {

return <div className='carousel'>
  <div
    className='slideBackground'
    style={{
      backgroundImage: ``
    }}
    /* Sacar slide seleccionada para pasar como BG */
    >
  </div>
  <Carousel showArrows={true} autoPlay interval={3500} infiniteLoop showThumbs={false}>
    <div className="carousel__slides-patty">
      <p className='legend'> Empanadas y empanadillas, enteras o porciones</p>
    </div>
    <div className="carousel__slides-pizza">
      <p className='legend'>Pizzas, enteras o porciones</p>
    </div>
    <div className="carousel__slides-desserts">
      <p className='legend'>Postres 100% caseros</p>
    </div>
  </Carousel>
</div>

}

export default CarouselIntro;