import { useState } from "react";
import { Link } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useSelector } from "react-redux";

function Header() {
  const [navToggle, setNavToggle] = useState(false);
  const cartItems = useSelector((store) => store.cart.items);
  

  return (
    <nav className="py-4 shadow-lg px-3 xs:px-8  flex items-center justify-between">
      <div className="flex w-[20rem]  items-center cursor-pointer">
        <h2 className="font-bold text-xl">Shoppy-Globe</h2>
        
      </div>
      <div
        className="toggleBtn sm:hidden transition-all"
        onClick={() => setNavToggle(!navToggle)}
      >
        {navToggle ? <ImCross /> : <GiHamburgerMenu />}
      </div>
      <ul
        className={`links flex font-bold pb-8 gap-8 transition-all bg-white border-4 border-black border-l-0 sm:border-none sm:bg-transparent sm:items-center  items-start justify-end flex-col absolute top-[70px] h-[12rem] sm:h-auto ${
          navToggle ? "left-0" : "left-[-700px] "
        }  p-5 sm:p-0 w-full sm:static sm:flex-row`}
      >
        <li className="hover:text-[#70ff4c] hover:underline cursor-pointer">
          <Link to={"/"}>🏠Home</Link>
        </li>
        <li className="hover:text-[#70ff4c] hover:underline cursor-pointer">
          <Link to={"/cart"}>🛒Cart ({cartItems.length})</Link>
        </li>
        <li className="hover:text-[#70ff4c] hover:underline cursor-pointer">
          <Link to={"/checkout"}>✅Checkout</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
