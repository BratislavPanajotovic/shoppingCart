import Button from "./Button";
interface UpdateItemQuantityProps {
  currentQuantity: number;
}

function UpdateItemQuantity({ currentQuantity }: UpdateItemQuantityProps) {
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type="round">-</Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button type="round">+</Button>
      <div>
        <Button type="small">remove from cart</Button>
      </div>
    </div>
  );
}

export default UpdateItemQuantity;
