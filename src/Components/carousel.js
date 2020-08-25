import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from 'react-bootstrap/Carousel'


class MyCarousel extends React.Component {
    render() {
        return (
            <div class="d-flex justify-content-center">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-flex justify-content-center h-20"
                        src="https://i.redd.it/wblvjew6h1j51.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-flex justify-content-center h-20"
                        src="https://i.redd.it/mh5d9rjmqxi51.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-flex justify-content-center h-20"
                        src="https://i.redd.it/48fskf13rzi51.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
        )
    }
}

export default MyCarousel;