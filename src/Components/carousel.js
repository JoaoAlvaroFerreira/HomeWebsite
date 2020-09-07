import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import image1 from '../images/a.png';
import image2 from '../images/b.png';
import image3 from '../images/c.jpg';
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
                interval={1000}
                cssModule={AwesomeSliderStyles}
              >
                <div data-src={image1} />
                <div data-src={image2} />
                <div data-src={image3} />
              </AutoplaySlider>
   

        )
    }
}

export default MyCarousel;