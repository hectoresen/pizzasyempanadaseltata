import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './CarouselIntro.scss';

const CarouselIntro = () => {

return <div className='carousel'>
  <div
    className='slideBackground'
    style={{
      backgroundImage: `https://cdn.discordapp.com/attachments/964479986855706624/1001133578282868807/209290430_169364441919154_6614498174943569325_n.jpg`
    }}
    /* Sacar slide seleccionada para pasar como BG */
    >
  </div>
  <Carousel showArrows={true} autoPlay interval={3500} infiniteLoop showThumbs={false}>
    <div className="carousel__slides-patty" style={{ padding: 20, height: 450 }}>
      <p className='legend'> Empanadas y empanadillas, enteras o porciones</p>
    </div>
    <div className="carousel__slides-pizza" style={{ padding: 20, height: 450 }}>
      <p className='legend'>Pizzas, enteras o porciones</p>
    </div>
    <div className="carousel__slides-desserts" style={{ padding: 20, height: 450 }}>
      <p className='legend'>Postres 100% caseros</p>
    </div>
  </Carousel>
</div>

}

export default CarouselIntro;