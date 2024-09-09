import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalPizza, getTotalPrice } from "./CartSlice";
import { formatCurrency } from "../utilities/helpers";

function CartOverview() {
  const totalPizza = useSelector(getTotalPizza)
  const totalPrice = useSelector(getTotalPrice);

  if(!totalPizza) return(
    <div className="italic text-center text-xs bg-black px-4 py-4 sm:text-sm uppercase text-stone-200 sm:px-6 md:text-base">Welcome to the best pizza Restaurant...!</div>
  )
  return (
    <div className="flex items-center justify-between bg-black px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4">
        <span>{totalPizza} pizzas</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <Link to= "/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
