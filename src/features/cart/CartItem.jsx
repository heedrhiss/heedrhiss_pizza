import { formatCurrency } from "../utilities/helpers";
import DeleteButton from "../ui/DeleteButton";

function CartItem({ item }) {

  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-semibold">{formatCurrency(totalPrice)}</p>
        <DeleteButton pizzaId={pizzaId}/>
      </div>
    </li>
  );
}

export default CartItem;
