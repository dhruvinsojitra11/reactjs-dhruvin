import { IoIosArrowDown } from "react-icons/io";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Container>
        <ul className="flex justify-center space-x-6 items-center text-blue-900 text-lg mt-6">
          <li id="home" className="Nav flex">
            <a href="#">Home</a>
            <IoIosArrowDown className="ml-1 mt-[5px]" />
            <section
              id="display"
              className="absolute top-[250px] flex left-0 space-x-7"
            >
              <div className="flex space-x-12 ml-2 mt-3 mr-2">
                <li>
                  <a href="#">
                    <img id="img" src="/src/assets/V1.jpg" alt="V1" />
                    <span className="span">Home Page V1</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img id="img" src="/src/assets/V2.jpg" alt="V2" />
                    <span className="span">Home Page V2</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img id="img" src="/src/assets/V3.jpg" alt="V3" />
                    <span className="span">Home Page V3</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img id="img" src="/src/assets/V4.jpg" alt="V4" />
                    <span className="span">Home Page V4</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img id="img" src="/src/assets/V5.jpg" alt="V5" />
                    <span className="span">Home Page V5</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img id="img" src="/src/assets/V6.jpg" alt="V6" />
                    <span className="span">Home Page V6</span>
                  </a>
                </li>
              </div>
            </section>
          </li>
          <li id="section" className="Nav flex">
            <a href="#">Shop</a>
            <IoIosArrowDown className="ml-1 mt-[5px]" />
            <section
              id="show"
              className="absolute space-x-24 left-0 ml-[200px] top-[250px] z-10"
            >
              <div className="flex space-x-24">
                <div className="space-y-6">
                  <h3>SHOP LAYOUT</h3>
                  <li className="animation">
                    <a href="#">
                      <span>Shop filter v1</span>
                    </a>
                  </li>
                  <li className="animation">
                    <a href="#">
                      <span>Shop filter v2</span>
                    </a>
                  </li>
                  <li className="animation">
                    <a href="#">
                      <span>Shop filter v3</span>
                    </a>
                  </li>
                  <li className="animation">
                    <a href="#">
                      <span>Shop Left sidebar</span>
                    </a>
                  </li>
                  <li className="animation">
                    <a href="#">
                      <span>Shop Right sidebar</span>
                    </a>
                  </li>
                  <li className="animation">
                    <NavLink to="/shop">
                      <span>Shop List views</span>
                    </NavLink>
                  </li>
                </div>
                <div className="space-y-6">
                  <h3>PRODUCT LAYOUT</h3>
                  <li className="animation">
                    <a href="#">
                      <span>Image scroll</span>
                    </a>
                  </li>
                  <li className="animation">
                    <a href="#">
                      <span>Product grid</span>
                    </a>
                  </li>
                  <li className="animation">
                    <a href="#">
                      <span>Carousel</span>
                    </a>
                  </li>
                  <li className="animation">
                    <a href="#">
                      <span>Vertical Left</span>
                    </a>
                  </li>
                  <li className="animation">
                    <a href="#">
                      <span>Vertical Right</span>
                    </a>
                  </li>
                  <li className="animation">
                    <a href="#">
                      <span>Vertical Horizontal</span>
                    </a>
                  </li>
                </div>
                <div className="space-y-6">
                  <h3>PRODUCT TYPE</h3>
                  <li className="animation">
                    <a href="#">
                      <span>Product Simple</span>
                    </a>
                  </li>
                  <li className="animation">
                    <a href="#">
                      <span>Product Group</span>
                    </a>
                  </li>
                  <li className="animation">
                    <a href="#">
                      <span>Product Variable</span>
                    </a>
                  </li>
                  <li className="animation">
                    <a href="#">
                      <span>Special</span>
                    </a>
                  </li>
                  <li className="animation">
                    <a href="#">
                      <span>Decoration</span>
                    </a>
                  </li>
                  <li className="animation">
                    <a href="#">
                      <span>Contruction</span>
                    </a>
                  </li>
                </div>
                <div className="space-y-6">
                  <h3>PRODUCT CATEGORY</h3>
                  <li className="animation">
                    <a href="#">
                      <span>Fresh bakery</span>
                    </a>
                  </li>
                  <li className="animation">
                    <a href="#">
                      <span>Fresh fruits</span>
                    </a>
                  </li>
                  <li className="animation">
                    <a href="#">
                      <span>Fresh meat</span>
                    </a>
                  </li>
                  <li className="animation">
                    <a href="#">
                      <span>Fruit drink</span>
                    </a>
                  </li>
                  <li className="animation">
                    <a href="#">
                      <span>Fresh bakery</span>
                    </a>
                  </li>
                  <li className="animation">
                    <a href="#">
                      <span>Biscuits snack</span>
                    </a>
                  </li>
                </div>
              </div>
            </section>
          </li>
          <li id="sec" className="Nav flex">
            <a href="#">Blog</a>
            <IoIosArrowDown className="ml-1 mt-[5px]" />
            <section
              id="sho"
              className="absolute space-x-24 left-0 ml-[580px] top-[250px] z-10"
            >
              <div className="space-y-6">
                <li className="animation">
                  <a href="#">
                    <span>Big image</span>
                  </a>
                </li>
                <li className="animation">
                  <NavLink to="/blog">
                    <span>Fullwidth</span>
                  </NavLink>
                </li>
                <li className="animation">
                  <a href="#">
                    <span>Left sidebar</span>
                  </a>
                </li>
                <li className="animation">
                  <a href="#">
                    <span>Right sidebar</span>
                  </a>
                </li>
                <li className="animation">
                  <a href="#">
                    <span>Single Post</span>
                  </a>
                </li>
              </div>
            </section>
          </li>
          <li id="see" className="Nav flex">
            <a href="#">Pages</a>
            <IoIosArrowDown className="ml-1 mt-[5px]" />
            <section
              id="shoo"
              className="absolute space-x-24 left-0 ml-[655px] top-[250px] z-10"
            >
              <div className="space-y-6">
                <li className="animation">
                  <a href="#">
                    <span>Coming soon</span>
                  </a>
                </li>
                <li className="animation">
                  <NavLink to="/FAQ">
                    <span>Frequently Asked Questions</span>
                  </NavLink>
                </li>
                <li className="animation">
                  <a href="#">
                    <span>Page 404</span>
                  </a>
                </li>
              </div>
            </section>
          </li>
          <li className="Nav flex">
            <NavLink to="/About">About Us</NavLink>
          </li>
          <li className="Nav flex">
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default Navbar;
