import { Fragment } from "react";
import { HeaderSix } from "../components/Header";
import { FooterSix } from "../components/Footer";

const LayoutSix = ({ children, navPositionClass, query ,item}) => {
  console.log("==================query==================");
  console.log(query);
  console.log("====================================");
  return (
    <Fragment>
      <HeaderSix navPositionClass={navPositionClass} query={query} item={item} />
      {children}
      <FooterSix />
    </Fragment>
  );
};

export default LayoutSix;
