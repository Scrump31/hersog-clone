import React from 'react';
import { Carousel } from 'react-responsive-carousel';

export default function Slider() {
  return (
    <Carousel
      showArrows
      showIndicators={false}
      infiniteLoop
      showStatus={false}
      showThumbs={false}
      className="col-"
    >
      <div>
        <img src={'http://lorempixel.com/1200/540/sports/1/'} alt={'1'} />
      </div>
      <div>
        <img src={'http://lorempixel.com/1200/540/sports/2/'} alt={'2'} />
      </div>
      <div>
        <img src={'http://lorempixel.com/1200/540/sports/3/'} alt={'3'} />
      </div>
    </Carousel>
  );
}
