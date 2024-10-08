import { formatCurrency } from "../utilities/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="my-3 p-2">
      <div className="flex items-center justify-between my-1">
        <p>
          <span className="font-semibold">{quantity}&times;</span> {name}
        </p>
        <p className="font-semibold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="capitalize italic text-stone-500 text-sm">{isLoadingIngredients ? 'Loading...' : ingredients.join(', ')}</p>
    </li>
  );
}

export default OrderItem;
