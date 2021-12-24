import Link from "next/link";
import { LayoutSix } from "../../layouts";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { TextWithImageOne } from "../../components/TextWithImage";
import {IconBoxThree } from "../../components/IconBox";

import teamMemberOneData from "../../data/team-member/team-member-one.json";
import testimonialOneData from "../../data/testimonials/testimonial-one.json";

const AboutUs = () => {
  return (
    <LayoutSix>
      {/* breadcrumb */}
      <BreadcrumbOne pageTitle="About Us">
        <ol className="breadcrumb justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="breadcrumb-item active">About Us</li>
        </ol>
      </BreadcrumbOne>
      {/* text with image */}
      <TextWithImageOne />
      {/* icon box */}
      <IconBoxThree />
    </LayoutSix>
  );
};

export default AboutUs;
