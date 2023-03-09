import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaSeedling } from "react-icons/fa";
import NavbarProdustDetail from "../smallcomponent/NavbarProdustDetail";
function Navbar() {
  const MoveNav = useRef(null);
  const MoveOut = () => {
    MoveNav.current.classList.toggle("Move");
  };

  useEffect(() => {
    console.log(document.querySelectorAll(".c-NavbarDetail"));
  }, []);
  return (
    <>
      <div className="wrap">
        <div className="c-NavbarContainer">
          <div className="c-Navbar">
            <ul>
              <li><Link to="/Cart">Cart</Link></li>
              <li><Link to="/CartProcess">CartProcess</Link></li>
              <li><Link to="/CreateOrder">CreateOrder</Link></li>
              <li>
                <Link to="#/">
                  <FaSeedling size={30} />
                </Link>
              </li>
              <li>
                <Link to="#/">
                  <FaShoppingCart
                    size={30}
                    onClick={() => {
                      MoveOut();
                    }}
                  />
                </Link>
              </li>
            </ul>
          </div>

          <div className="c-NavbarCart c-NavbarZ" ref={MoveNav}>
            <div className="c-NavbarCartText">
              <h2>購物車</h2>
            </div>
            <NavbarProdustDetail />
            <NavbarProdustDetail />
            <NavbarProdustDetail />
            <div className="c-NavbarCartbtn">
              <button>
                {" "}
                <h3>訂單結帳</h3>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
