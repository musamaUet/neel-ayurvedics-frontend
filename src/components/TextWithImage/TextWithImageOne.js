import { Container, Row, Col } from "react-bootstrap";

const TextWithImageOne = () => {
  return (
    <div className="text-image-section space-pt--20 space-pb--20">
      
        <Col lg={12} className="text-center about1">
        <Container>
            <div className="heading-s1 space-mb--20">
              <h2>Welcome to Neel Ayurvedics</h2>
            </div>
            <p>
            Ayurveda is considered by many scholars to be the oldest healing science. In Sanskrit, Ayurveda means “The Science of Life.” Ayurvedic knowledge originated in India more than 5,000 years ago and is often called the “Mother of All Healing.” It stems from the ancient Vedic culture and was taught for many thousands of years in an oral tradition from accomplished masters to their disciples.
            </p>
            <p>
            Ayurveda places great emphasis on prevention and encourages the maintenance of health through close attention to balance in one’s life, right thinking, diet, lifestyle and the use of herbs. Knowledge of Ayurveda enables one to understand how to create this balance of body, mind, and consciousness according to one’s own individual constitution and how to make lifestyle changes to bring about and maintain this balance.
            </p>
            </Container>
          </Col>

      <Container>
        <Row className="align-items-center about2">
         
          <Col lg={6}>
            <p>
            So in order to cure yourself naturally and to maintain the balance of your health we have started this website where you can buy Ayurveda and other Natural Products. We’ll keep sharing knowledge with you through some tips and articles which will help you to improve your health to stay fit. Our main motto is to help people cure completely with the natural products so that there are no side-effects to the body. We wish that people should live a healthy life.
            </p>
            <p>
            We are into this business from last 20 Years. Currently, we have three retail outlets named as “Neel Ayurvedics” in Rajkot, Gujarat and we are even planning to establish it in other cities of Gujarat too. Through this website, we want to make sure that Ayurveda reaches to each and every citizen of India.
            </p>
            <h5>STAY HEALTHY & CURE NATURALLY !!</h5>
          </Col>
          <Col lg={6}>
            <div className="about-img scene mb-4 mb-lg-0">
              <img src="/assets/images/banner/about_img.jpg" alt="about_img" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TextWithImageOne;
