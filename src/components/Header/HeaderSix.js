import { useState, useEffect } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { IoMdCart,IoIosSearch, IoIosMenu } from "react-icons/io";
import { AiFillHeart } from "react-icons/ai";
import { ImUser } from "react-icons/im";
import MobileMenuSearch from "./elements/MobileMenuSearch";
import Navigation from "./elements/Navigation";
import MobileMenu from "./elements/MobileMenu";
import MiniCart from "./elements/MiniCart";
import { getAllCategories } from "../../api/listings";
import { useRouter } from "next/router";

const HeaderSix = ({
  cartItems,
  wishlistItems,
  navPositionClass,
  query = { categoryId: "", title: "" },
  item,
}) => {
  const router = useRouter();
  const [scroll, setScroll] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [categories, setCategories] = useState([]);
  const [offCanvasMobileMenuActive, setOffCanvasMobileMenuActive] =
    useState(false);
  const [formField, setFormField] = useState({
    categoryId: query?.categoryId,
    title: query?.title,
  });

  useEffect(() => {
    const get = async () => {
      const response = await getAllCategories();
      console.log("=============search=======================");
      console.log(response?.categories);
      console.log(response?.categories?.length > 0);
      console.log("====================================");
      if (response?.categories?.length > 0) {
        setCategories([
          { _id: "", name: "All Categories" },
          ...response?.categories,
        ]);
        return;
      }
      setCategories([{ _id: "", name: "No Categories Available" }]);
    };
    get();

    const header = document.querySelector(".header-wrap");
    setHeaderHeight(header.offsetHeight);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  const handleChange = ({ target }) => {
    let data = { ...formField };
    data[target.name] = target.value;
    setFormField(data);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // alert(`showing search result for ${formField.title}`);
    router.push(
      `/search?categoryId=${encodeURIComponent(
        formField.categoryId
      )}&title=${encodeURIComponent(formField.title)}`
    );
  };
  return (
    <header
      className={`header-wrap header-with-topbar ${
        scroll > headerHeight ? "is-sticky" : ""
      }`}
    >
      {/* header top */}

      {/* middle header */}
      <div className="middle-header dark-skin">
        <div className="container-fluid headerbox">
          <div className="d-flex  align-items-center">
            <button
              className="nav-link mobile-menu-trigger pr-0"
              onClick={() => {
                setOffCanvasMobileMenuActive(true);
              }}
            >
              <IoIosMenu />
            </button>
            {/* logo */}
            <Link href="/">
              <a className="navbar-brand pt-10 pb-10">
                <img
                  className="logo-light"
                  src="/assets/images/logo.jpg"
                  alt="logo"
                />
                <img
                  className="logo-dark"
                  src="/assets/images/logo.jpg"
                  alt="logo"
                />
              </a>
            </Link>
            <div className="product-search-form product-search-form--style-three d-none d-lg-block">
              <form>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="custom-select-wrapper">
                      <select
                        className="first-null"
                        defaultValue="All"
                        // value={formField.categoryId}
                        name="categoryId"
                        onChange={handleChange}
                      >
                        {categories !== [] &&
                          categories?.map((cat) => (
                            <option
                              value={cat?._id}
                              selected={formField.categoryId == cat._id}
                            >
                              {cat?.name}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>
                  <input
                    className="form-control"
                    placeholder="Search Product..."
                    required
                    type="text"
                    name="title"
                    value={formField.title}
                    onChange={handleChange}
                  />
                  <button
                    type="submit"
                    className="search-btn-two"
                    onClick={handleSearch}
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
            <div className="contact-phone">
              <ul className="header-icons d-flex justify-content-end">
                <li className="position-relative">
                  <Link href="/other/wishlist">
                    <a className="nav-link mini-cart-trigger pr-md-3 pr-0 px-0">
                      <AiFillHeart />
                      <p>Wishlist</p>
                      {wishlistItems.length > 0 ? (
                        <span className="cart-count cart-count--mobile">
                          {wishlistItems.length}
                        </span>
                      ) : (
                        ""
                      )}
                    </a>
                  </Link>
                </li>

                <li className="d-none d-lg-block position-relative">
                  <Link href="/other/cart">
                    <a className="nav-link mini-cart-trigger pr-md-3 pr-0 px-0">
                      <IoMdCart />
                      <p>Cart</p>
                      {cartItems.length > 0 ? (
                        <span className="cart-count">{cartItems.length}</span>
                      ) : (
                        ""
                      )}
                    </a>
                  </Link>
                  {/* mini cart */}
                  <MiniCart cartItems={cartItems} />
                </li>

                <li className="d-block d-lg-none position-relative">
                  <Link href="/other/cart">
                    <a className="nav-link mini-cart-trigger pr-md-3 pr-0 px-0">
                      <IoMdCart />
                      <p>Cart</p>
                      {cartItems.length > 0 ? (
                        <span className="cart-count cart-count--mobile">
                          {cartItems.length}
                        </span>
                      ) : (
                        ""
                      )}
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/other/my-account">
                    <a className="nav-link pr-md-3 pr-0 px-0">
                      <ImUser />
                      <p>Sign In</p>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* bottom header */}
      <div className="bottom-header dark-skin headcolor border-bottom">
        <Container>
          <Row className="align-items-center">
            <Col lg={12}>
              <div className="d-flex align-items-center justify-content-end">
                {/* navigation */}
                <Navigation positionClass={navPositionClass} item={item} />
                {/* icons */}

                <ul className="header-icons d-flex justify-content-end">
                  <li>
                    <MobileMenuSearch className="box3" />
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* mobile navigation menu */}
      <MobileMenu
        activeStatus={offCanvasMobileMenuActive}
        getActiveStatus={setOffCanvasMobileMenuActive}
      />
      {/* mobile category navigation menu */}
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartData,
    wishlistItems: state.wishlistData,
  };
};

export default connect(mapStateToProps)(HeaderSix);
