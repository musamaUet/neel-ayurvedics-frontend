import Link from "next/link";
import { Container, Row, Col, Form } from "react-bootstrap";
import {
  IoIosPhonePortrait,
  IoIosShuffle,
  IoIosHeartEmpty
} from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";

const HeaderTop = () => {
  return (
    <div className="top-header d-none d-lg-block">
      <Container>
        <Row className="align-items-center">
        <marquee scrolldelay="200" behavior="scroll" direction="left" style="line-height: 20px;font-size: 16px;color: #ff0000;letter-spacing: 1px;">Welcome to Neel Ayurvedics Online Shopping Store ! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We ship across all India + International Express Shipping to Over 150 Countries Like USA, UK, Canada, Australia, New Zealand, Ireland, Germany, France, Hong Kong, Sweden, Singapore, UAE, Sri Lanka, etc.</marquee>
        </Row>
      </Container>
    </div>
  );
};

export default HeaderTop;
