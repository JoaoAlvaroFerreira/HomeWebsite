import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from '../slider.scss';
import image1 from '../images/a.png';
import image2 from '../images/b.png';
import image3 from '../images/c.jpg';


class MyCarousel extends React.Component {
    render() {
        return (
           
                <AwesomeSlider  cssModule={AwsSliderStyles}>
                  <div data-src={image1} />
                  <div data-src={image2} />
                  <div data-src={image3} />
                </AwesomeSlider>
              
        )
    }
}

export default MyCarousel;