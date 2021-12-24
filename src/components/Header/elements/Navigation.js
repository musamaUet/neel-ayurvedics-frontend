import Link from "next/link";
import { Col } from "react-bootstrap";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const Navigation = ({ positionClass, item }) => {
  // console.log("==================Item==================");
  // console.log(item);
  // console.log("====================================");
  return (
    <nav className="navigation d-none d-lg-block">
      <ul
        className={`d-flex productcenter ${
          positionClass ? positionClass : "justify-content-end"
        }`}
      >
        <li>
          <Link href="/">
            <a className="nav-link">HOME</a>
          </Link>
        </li>
        {item?.returnedProducts?.map((ite) => (
          <>
            {" "}
            <li className="has-children-mega">
              <Link href="/">
                <a className="nav-link">
                  {ite.name} <IoIosArrowDown />
                </a>
              </Link>
              <ul className="sub-menu sub-menu--mega">
                <li className="sub-menu--mega__column">
                  <h3 className="sub-menu--mega__title">{ite.name}</h3>
                  <ul className="sub-menu--mega__list">
                    {ite?.subcategories?.slice(0, 6).map((i) => (
                      <li>
                        <Link href={`/subcategory/${i?._id}`}>
                          <a>{i?.name}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                {ite?.subcategories?.slice(6, 12).length > 0 && (
                  <li className="sub-menu--mega__column">
                    <h3 className="sub-menu--mega__title">{ite.name}</h3>
                    <ul className="sub-menu--mega__list">
                      {ite?.subcategories?.slice(6, 12).map((i) => (
                        <li>
                          <Link href={`/subcategory/${i?._id}`}>
                            <a>{i?.name}</a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                )}
                {ite?.subcategories?.slice(12, 18).length > 0 && (
                  <li className="sub-menu--mega__column">
                    <h3 className="sub-menu--mega__title">{ite.name}</h3>
                    <ul className="sub-menu--mega__list">
                      {ite?.subcategories?.slice(12, 18).map((i) => (
                        <li>
                          <Link href={`/product/${i?._id}`}>
                            <a>{i?.name}</a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                )}
              </ul>
            </li>
            {/* <li>
                      <Link href="#">
                        <a>Amla</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>Curana</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>chaman</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="sub-menu--mega__column">
                  <h3 className="sub-menu--mega__title">Ayur</h3>
                  <ul className="sub-menu--mega__list">
                    <li>
                      <Link href="#">
                        <a>Amla</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>Curana</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>chaman</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="sub-menu--mega__column">
                  <h3 className="sub-menu--mega__title">Ayurveda Products</h3>
                  <ul className="sub-menu--mega__list">
                    <li>
                      <Link href="#">
                        <a>Amla</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>Curana</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>chaman</a>
                      </Link>
                    </li> */}
            {/* </ul>
                </li> */}
            <li className="has-children-mega"></li>
          </>
        ))}
        {/* <li className="has-children-mega">
          <Link href="/">
            <a className="nav-link">
              Ayurveda Products <IoIosArrowDown />
            </a>
          </Link>
          <ul className="sub-menu sub-menu--mega">
            <li className="sub-menu--mega__column">
              <h3 className="sub-menu--mega__title">Ayurveda Products</h3>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link href="#">
                    <a>Amla</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Curana</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>chaman</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__column">
              <h3 className="sub-menu--mega__title">Ayurveda Products</h3>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link href="#">
                    <a>Amla</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Curana</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>chaman</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__column">
              <h3 className="sub-menu--mega__title">Ayurveda Products</h3>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link href="#">
                    <a>Amla</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Curana</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>chaman</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="has-children-mega">
          <Link href="/">
            <a className="nav-link">
              Personal Care <IoIosArrowDown />
            </a>
          </Link>
          <ul className="sub-menu sub-menu--mega">
            <li className="sub-menu--mega__column">
              <h3 className="sub-menu--mega__title">Ayurveda Products</h3>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link href="#">
                    <a>Amla</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Curana</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>chaman</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__column">
              <h3 className="sub-menu--mega__title">Ayurveda Products</h3>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link href="#">
                    <a>Amla</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Curana</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>chaman</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__column">
              <h3 className="sub-menu--mega__title">Ayurveda Products</h3>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link href="#">
                    <a>Amla</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Curana</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>chaman</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="has-children-mega">
          <Link href="/">
            <a className="nav-link">
              Fitness & Supplements <IoIosArrowDown />
            </a>
          </Link>
          <ul className="sub-menu sub-menu--mega">
            <li className="sub-menu--mega__column">
              <h3 className="sub-menu--mega__title">Ayurveda Products</h3>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link href="#">
                    <a>Amla</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Curana</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>chaman</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__column">
              <h3 className="sub-menu--mega__title">Ayurveda Products</h3>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link href="#">
                    <a>Amla</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Curana</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>chaman</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__column">
              <h3 className="sub-menu--mega__title">Ayurveda Products</h3>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link href="#">
                    <a>Amla</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Curana</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>chaman</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="has-children-mega">
          <Link href="/">
            <a className="nav-link">
              Company Wise <IoIosArrowDown />
            </a>
          </Link>
          <ul className="sub-menu sub-menu--mega">
            <li className="sub-menu--mega__column">
              <h3 className="sub-menu--mega__title">Ayurveda Products</h3>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link href="#">
                    <a>Amla</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Curana</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>chaman</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__column">
              <h3 className="sub-menu--mega__title">Ayurveda Products</h3>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link href="#">
                    <a>Amla</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Curana</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>chaman</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__column">
              <h3 className="sub-menu--mega__title">Ayurveda Products</h3>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link href="#">
                    <a>Amla</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Curana</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>chaman</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="has-children-mega">
          <Link href="/">
            <a className="nav-link">
              Health Conditions <IoIosArrowDown />
            </a>
          </Link>
          <ul className="sub-menu sub-menu--mega">
            <li className="sub-menu--mega__column">
              <h3 className="sub-menu--mega__title">Ayurveda Products</h3>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link href="#">
                    <a>Amla</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Curana</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>chaman</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__column">
              <h3 className="sub-menu--mega__title">Ayurveda Products</h3>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link href="#">
                    <a>Amla</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Curana</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>chaman</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__column">
              <h3 className="sub-menu--mega__title">Ayurveda Products</h3>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link href="#">
                    <a>Amla</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Curana</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>chaman</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="has-children-mega">
          <Link href="/">
            <a className="nav-link">
              Other Products <IoIosArrowDown />
            </a>
          </Link>
          <ul className="sub-menu sub-menu--mega">
            <li className="sub-menu--mega__column">
              <h3 className="sub-menu--mega__title">Ayurveda Products</h3>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link href="#">
                    <a>Amla</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Curana</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>chaman</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__column">
              <h3 className="sub-menu--mega__title">Ayurveda Products</h3>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link href="#">
                    <a>Amla</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Curana</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>chaman</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__column">
              <h3 className="sub-menu--mega__title">Ayurveda Products</h3>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link href="#">
                    <a>Amla</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Curana</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>chaman</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <Link href="/other/contact-us">
            <a className="nav-link">Consultation</a>
          </Link>
        </li>
   */}
      </ul>
    </nav>
  );
};

export default Navigation;
