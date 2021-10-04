import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import image1 from '../images/a.png';
import image2 from '../images/b.png';
import image3 from '../images/c.jpg';
import image4 from '../images/monster.png';
import '../slider.scss';

import withAutoplay from 'react-awesome-slider/dist/autoplay';
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/cube-animation/cube-animation.scss';

const AutoplaySlider = withAutoplay(AwesomeSlider);

class MyCarousel extends React.Component {
    render() {
        return (
           
           
              <AutoplaySlider
                play={true}
                cancelOnInteraction={false}
                cancelOnHover={false}
                interval={5000}
                cssModule={AwesomeSliderStyles}
              >
                <div data-src={image1} />
               <div data-src={image2}/>
               <div data-src={image3} />
               <div data-src={image4} />
               
              </AutoplaySlider>
   

        )
    }
}

export default MyCarousel;