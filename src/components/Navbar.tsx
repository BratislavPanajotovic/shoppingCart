import Home from "../ui/Home";
import About from "../ui/About";
import Store from "../ui/Store";
import CartIcon from "../ui/CartIcon";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="w-full bg-white shadow-md mb-1 sticky top-0 ">
      <div className="flex justify-around align-center mt-1 mb-1 ">
        <Link to="/" className="tracking-widest">
          Home
        </Link>
        <Link to="About" className="tracking-widest">
          About
        </Link>
        <Link to="Store" className="tracking-widest">
          Store
        </Link>
        <CartIcon />
      </div>
    </div>
  );
}

export default Navbar;
