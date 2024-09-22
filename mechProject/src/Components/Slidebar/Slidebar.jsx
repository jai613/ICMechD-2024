import Carousel from 'react-bootstrap/Carousel';
import './Slidebar.css'; 

function Slidebar() {
  return (
    <Carousel className="custom-carousel" prevIcon={<span className="custom-prev-icon" />} nextIcon={<span className="custom-next-icon" />}>
      <Carousel.Item>
        <div className="d-flex justify-content-center">
          <img
            className="d-block custom-img"
            src="src/assets/clocktower.jpg" 
            alt="First slide"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center">
          <img
            className="d-block custom-img"
            src="src/assets/clocktower.jpg" 
            alt="Second slide"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center">
          <img
            className="d-block custom-img"
            src="src/assets/clocktower.jpg" 
            alt="Third slide"
          />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slidebar;
