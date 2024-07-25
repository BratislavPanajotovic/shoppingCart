import Home from "../ui/Home";
import About from "../ui/About";
import Store from "../ui/Store";
import CartIcon from "../ui/CartIcon";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="w-full bg-white shadow-md mb-1 ">
      <div className="flex justify-around align-center mt-1 mb-1 ">
        <Link to="/" className="tracking-widest">
          <Home />
        </Link>
        <Link to="About">
          <About />
        </Link>
        <Link to="Store">
          <Store />
        </Link>
        <CartIcon />
      </div>
    </div>
  );
}

export default Navbar;
