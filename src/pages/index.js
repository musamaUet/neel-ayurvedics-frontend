import { connect } from "react-redux";
import { getProducts } from "../lib/product";
import { LayoutSix } from "../layouts";
import { HeroSliderFive } from "../components/HeroSlider";
import { BrandLogoThree } from "../components/BrandLogo";
import {
  CategorySliderOne,
  CategorySliderTwo,
} from "../components/CategorySlider";
import { BannerSix, BannerSeven, BannerEight } from "../components/Banner";
import {
  TestimonialOne,
  TestimonialTwo,
  TestimonialThree,
  TestimonialFour,
} from "../components/Testimonial";
import { ProductSliderNine } from "../components/ProductSlider";
import { IconBoxThree } from "../components/IconBox";

import heroSliderFiveData from "../data/hero-sliders/hero-slider-five.json";
import brandLogoData from "../data/brand-logo/brand-logo-one.json";
import categorySliderData from "../data/category-sliders/category-slider-two.json";
import testimonialOneData from "../data/testimonials/testimonial-one.json";
import testimonialTwoData from "../data/testimonials/testimonial-two.json";
import testimonialThreeData from "../data/testimonials/testimonial-three.json";
import testimonialFourData from "../data/testimonials/testimonial-four.json";
import categorySliderData1 from "../data/category-sliders/category-slider-one.json";
import {
  getProductBrands,
  getProducts as getAllProducts,
  getBanners,
  getCategoryWiseProducts,
  getNavBarItems,
  getAllCategories,
  getDiseases,
} from "../api/listings";

const ElectronicsOne = ({ data }) => {
  console.log("====================================");
  console.log(data);

  console.log("============***********========================");
  const {
    categories,
    brands,
    healthConcern,
    // hairAndShampoo,
    // skinCare,
    banners,
    navBarItems,
    // covidProducts,
    bestDeals,
    products,
  } = data;

  return (
    <LayoutSix navPositionClass="justify-content-start" item={navBarItems}>
      {/* hero slider */}
      <HeroSliderFive
        heroSliderData={banners?.slider}
        sidebar={banners?.sidebar}
      />

      <CategorySliderOne
        title="Top Categories"
        categorySliderData1={categories?.categories}
      />

      {/* category slider */}
      <CategorySliderTwo
        title="Health Concern"
        categorySliderData={healthConcern?.diseases}
      />
      {/* brand logo */}
      <BrandLogoThree title="Top Brands" brandLogoData={brands?.brands} />
      {/* testimonial */}
      {/* <TestimonialOne
        title="Exclusive Offers"
        testimonialData={testimonialOneData}
      /> */}

      {/* banner */}
      <BannerEight />

      {/* <TestimonialTwo
        title="Brand Store"
        testimonialDataTwo={testimonialTwoData}
      /> */}

      {/* banner */}
      <BannerSeven />

      {/* <TestimonialThree
        title="New Arrivals"
        testimonialDataThree={testimonialThreeData}
      /> */}

      {/* banner */}
      <BannerSix />

      {/* product slider */}
      {/* <ProductSliderNine
        pera="UPTO 60% Off"
        title="Covid -19 Essentials"
        category="Covid -19 Essentials"
        categoryImage="/assets/images/categories/category1.png"
        categoryURL="##"
        products={covidProducts?.products}
      /> */}
      <ProductSliderNine
        pera="UPTO 60% Off"
        title="Best Deals"
        category="Best Deals"
        categoryImage="/assets/images/categories/category2.png"
        categoryURL="/best_deals"
        products={bestDeals?.newProducts}
      />
      {/* <ProductSliderNine
        pera="UPTO 60% Off"
        title="Hair Oils & Shampoos"
        category="Hair Oils & Shampoos"
        categoryImage="/assets/images/categories/category3.png"
        categoryURL="##"
        products={hairAndShampoo?.products}
      /> */}
      <ProductSliderNine
        pera="UPTO 60% Off"
        title="Try Something New"
        category="Try Something New"
        categoryImage="/assets/images/categories/category4.png"
        categoryURL="/new_product"
        products={products?.newProducts}
      />
      {/* <ProductSliderNine
        pera="UPTO 20% Off"
        title="Skin Care"
        category="Skin Care"
        categoryImage="/assets/images/categories/category6.png"
        categoryURL="##"
        products={skinCare?.products}
      /> */}

      {/* blog grid */}
      <TestimonialFour title="Blog" testimonialDataFour={testimonialFourData} />

      {/* icon box */}
      <IconBoxThree />
    </LayoutSix>
  );
};

export async function getStaticProps() {
  let categories = await getAllCategories();
  let products = await getAllProducts();
  let brands = await getProductBrands();
  // let hairAndShampoo = await getCategoryWiseProducts(
  //   "611cdcfed5b0b100165c842c"
  // );
  let healthConcern = await getDiseases();
  // let skinCare = await getCategoryWiseProducts("611514361f92900016833d73");
  // let covidProducts = await getCategoryWiseProducts("covid-19");
  // let bestDeals = await getCategoryWiseProducts("best-deals");
  let navBarItems = await getNavBarItems();
  let banners = await getBanners();

  return {
    props: {
      data: {
        categories,
        products,
        brands,
        banners,
        // covidProducts: hairAndShampoo,
        bestDeals: products,
        navBarItems,
        healthConcern,
        // skinCare,
        // hairAndShampoo,
      },
    },
    revalidate: 5000,
  };
}

// export async function getServerSideProps() {
//   let categories = await getAllCategories();
//   let products = await getAllProducts();
//   let brands = await getProductBrands();
//   // let hairAndShampoo = await getCategoryWiseProducts(
//   //   "611cdcfed5b0b100165c842c"
//   // );
//   let healthConcern = await getDiseases();
//   // let skinCare = await getCategoryWiseProducts("611514361f92900016833d73");
//   // let covidProducts = await getCategoryWiseProducts("covid-19");
//   // let bestDeals = await getCategoryWiseProducts("best-deals");
//   let navBarItems = await getNavBarItems();
//   let banners = await getBanners();

//   return {
//     props: {
//       data: {
//         categories,
//         products,
//         brands,
//         banners,
//         // covidProducts: hairAndShampoo,
//         bestDeals: products,
//         navBarItems,
//         healthConcern,
//         // skinCare,
//         // hairAndShampoo,
//       },
//     },
//   };
// }

const mapStateToProps = (state) => {
  const products = state.productData;
  return {
    covidProducts: getProducts(products, "electronics", "covid", 10),
    bestDeals: getProducts(products, "electronics", "bestDeals", 10),
    trySomethingNew: getProducts(
      products,
      "electronics",
      "trySomethingNew",
      10
    ),
    skinCare: getProducts(products, "electronics", "skinCare", 10),
  };
};

export default connect(mapStateToProps)(ElectronicsOne);
