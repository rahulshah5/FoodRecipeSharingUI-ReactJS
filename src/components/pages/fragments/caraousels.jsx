import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';

function ControlledCarousel(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const navigate=useNavigate()



  return (
    <Carousel activeIndex={index} onSelect={handleSelect} >
      {props?.recipe?.map((item, idx) => (
        <Carousel.Item key={idx}>
          <div className="carousel-image-container" >
            <div className="fade-overlay"></div>
            <img
              className="d-block w-100"
              src={item.image_url}
              alt={`Slide ${idx}`}
              
            />
            <div className="carousel-caption " >
              <h3>{item.title}</h3>
              <p className='wrapped-text'>{item.description}</p>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ControlledCarousel;
