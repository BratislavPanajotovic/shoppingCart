import Button from "./Button";
import { useShoppingCart } from "../context/ShoppingCartContext";

interface UpdateItemQuantityProps {
  itemId: number;
  currentQuantity: number;
}

function UpdateItemQuantity({
  itemId,
  currentQuantity,
}: UpdateItemQuantityProps) {
  const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useShoppingCart();
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type="round" onClick={() => decreaseCartQuantity(itemId)}>
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button type="round" onClick={() => increaseCartQuantity(itemId)}>
        +
      </Button>
      <div>
        <Button type="small" onClick={() => removeFromCart(itemId)}>
          remove from cart
        </Button>
      </div>
    </div>
  );
}

export default UpdateItemQuantity;
