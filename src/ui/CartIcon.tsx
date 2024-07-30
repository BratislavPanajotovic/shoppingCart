import cartImage from "./../data/shopping-cart-cart-svgrepo-com.svg";
import { Link } from "react-router-dom";

type CartIcon = {
  quantity: number;
};
function CartIcon({ quantity }: CartIcon) {
  return (
    <div className="relative flex justify-center items-center w-8 h-8 bg-gray-200 rounded-full">
      <Link to="Cart" className="relative">
        <img src={cartImage} alt="Cart" className="w-6 h-6" />
        {quantity > 0 && (
          <div className="absolute bottom-0 right-0 transform translate-x-3/4 translate-y-1/2 flex items-center justify-center w-4 h-4 rounded-full bg-red-700 text-white text-xs">
            {quantity}
          </div>
        )}
      </Link>
    </div>
  );
}

export default CartIcon;
