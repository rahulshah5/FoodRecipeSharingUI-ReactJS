import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
            <div className="carousel-image-container">
            <div className="fade-overlay"></div>
            <img
                className="d-block w-100"
                src={props.img}
                alt="First slide"
            />
            <div className="carousel-caption">
                <h3>Your Text Here</h3>
                <p>Additional description</p>
            </div>
            </div>

        </Carousel.Item>
        <Carousel.Item>
            <div className="carousel-image-container">
            <div className="fade-overlay"></div>
            <img
                className="d-block w-100"
                src={props.img}
                alt="First slide"
            />
            <div className="carousel-caption">
                <h3>Your Text Here</h3>
                <p>Additional description</p>
            </div>
            </div>

        </Carousel.Item>
        </Carousel>

  );
}

export default ControlledCarousel;