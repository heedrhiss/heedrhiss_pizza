import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="bg-black flex items-center justify-between uppercase p-5">
      <p className="space-x-4">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to= "/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
