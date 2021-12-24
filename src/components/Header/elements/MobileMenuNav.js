import { useEffect } from "react";
import Link from "next/link";

const MobileMenuNav = ({ getActiveStatus }) => {
  useEffect(() => {
    const offCanvasNav = document.querySelector(
      "#offcanvas-mobile-menu__navigation"
    );
    const offCanvasNavSubMenu = offCanvasNav.querySelectorAll(
      ".mobile-sub-menu"
    );
    const anchorLinks = offCanvasNav.querySelectorAll("a");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        "<span class='menu-expand'><i></i></span>"
      );
    }

    const menuExpand = offCanvasNav.querySelectorAll(".menu-expand");
    const numMenuExpand = menuExpand.length;

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", (e) => {
        sideMenuExpand(e);
      });
    }

    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener("click", () => {
        getActiveStatus(false);
      });
    }
  });

  const sideMenuExpand = (e) => {
    e.currentTarget.parentElement.classList.toggle("active");
  };
  return (
    <nav
      className="offcanvas-mobile-menu__navigation space-mb--30"
      id="offcanvas-mobile-menu__navigation"
    >
      <ul>
        <li className="menu-item-has-children">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>

        <li className="menu-item-has-children">
          <Link href="/shop/grid-left-sidebar">
            <a>Ayurveda Products</a>
          </Link>
          <ul className="mobile-sub-menu">
            <li className="menu-item-has-children">
              <Link href="/shop/grid-left-sidebar">
                <a>Hair oil</a>
              </Link>
              <ul className="mobile-sub-menu">
                <li>
                  <Link href="/shop/grid-left-sidebar">
                    <a>Amla</a>
                  </Link>
                </li>
                <li>
                  <Link href="/shop/grid-right-sidebar">
                    <a>Dabar</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
 
        <li className="menu-item-has-children">
          <Link href="/shop/grid-left-sidebar">
            <a>Personal Care</a>
          </Link>
          <ul className="mobile-sub-menu">
            <li className="menu-item-has-children">
              <Link href="/shop/grid-left-sidebar">
                <a>Hair oil</a>
              </Link>
              <ul className="mobile-sub-menu">
                <li>
                  <Link href="/shop/grid-left-sidebar">
                    <a>Amla</a>
                  </Link>
                </li>
                <li>
                  <Link href="/shop/grid-right-sidebar">
                    <a>Dabar</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="menu-item-has-children">
          <Link href="/shop/grid-left-sidebar">
            <a>Fitness & Supplements</a>
          </Link>
          <ul className="mobile-sub-menu">
            <li className="menu-item-has-children">
              <Link href="/shop/grid-left-sidebar">
                <a>Hair oil</a>
              </Link>
              <ul className="mobile-sub-menu">
                <li>
                  <Link href="/shop/grid-left-sidebar">
                    <a>Amla</a>
                  </Link>
                </li>
                <li>
                  <Link href="/shop/grid-right-sidebar">
                    <a>Dabar</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="menu-item-has-children">
          <Link href="/shop/grid-left-sidebar">
            <a>Company Wise</a>
          </Link>
          <ul className="mobile-sub-menu">
            <li className="menu-item-has-children">
              <Link href="/shop/grid-left-sidebar">
                <a>Hair oil</a>
              </Link>
              <ul className="mobile-sub-menu">
                <li>
                  <Link href="/shop/grid-left-sidebar">
                    <a>Amla</a>
                  </Link>
                </li>
                <li>
                  <Link href="/shop/grid-right-sidebar">
                    <a>Dabar</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="menu-item-has-children">
          <Link href="/shop/grid-left-sidebar">
            <a> Health Conditions</a>
          </Link>
          <ul className="mobile-sub-menu">
            <li className="menu-item-has-children">
              <Link href="/shop/grid-left-sidebar">
                <a>Hair oil</a>
              </Link>
              <ul className="mobile-sub-menu">
                <li>
                  <Link href="/shop/grid-left-sidebar">
                    <a>Amla</a>
                  </Link>
                </li>
                <li>
                  <Link href="/shop/grid-right-sidebar">
                    <a>Dabar</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="menu-item-has-children">
          <Link href="/shop/grid-left-sidebar">
            <a>Other Products </a>
          </Link>
          <ul className="mobile-sub-menu">
            <li className="menu-item-has-children">
              <Link href="/shop/grid-left-sidebar">
                <a>Hair oil</a>
              </Link>
              <ul className="mobile-sub-menu">
                <li>
                  <Link href="/shop/grid-left-sidebar">
                    <a>Amla</a>
                  </Link>
                </li>
                <li>
                  <Link href="/shop/grid-right-sidebar">
                    <a>Dabar</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
         
        <li>
          <Link href="/other/contact-us">
            <a>Consultation</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileMenuNav;
