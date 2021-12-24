import { LayoutSix } from "../../layouts";
import {
  BannerNine,
  BannerFive,
  BannerThree,
  BannerTwo,
  BannerTen,
} from "../../components/Banner";
import { TestimonialFive } from "../../components/Testimonial";

import testimonialDataFive from "../../data/testimonials/testimonial-five.json";

const Appointment = () => {
  return (
    <LayoutSix>
      <BannerNine />

      <BannerThree />

      <BannerFive />

      <BannerTwo />

      <BannerTen />

      <TestimonialFive testimonialDataFive={testimonialDataFive} />
    </LayoutSix>
  );
};

export default Appointment;
