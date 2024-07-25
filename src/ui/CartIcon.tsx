import cartImage from "./../data/shopping-cart-cart-svgrepo-com.svg";
import { Link } from "react-router-dom";
function CartIcon() {
  return (
    <div className="flex justify-center items-center w-8 h-8 bg-gray-200 rounded-full ">
      <Link to="Cart">
        <img src={cartImage} alt="Cart" className="w-6 h-6" />
      </Link>
    </div>
  );
}

export default CartIcon;
