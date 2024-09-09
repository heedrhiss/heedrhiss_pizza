import { useDispatch, useSelector } from "react-redux";
import Button from "../ui/Button";
import { formatCurrency } from "../utilities/helpers";
import { addItem, getCartQuantity } from "../cart/CartSlice";
import DeleteButton from "../ui/DeleteButton";
import UpdateButtons from "../ui/UpdateButtons";



function MenuItem({ pizza }) {
  const dispatch = useDispatch()
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  function handleAdd(){
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1
    }
   dispatch(addItem(newItem))
  }
  const getQuantity = useSelector(getCartQuantity(id));
  const isInCart = getQuantity > 0;
  return (
    <li className="flex gap-4 py-2">
      <img src={imageUrl} alt={name} className={`h-28 ${soldOut ? 'opacity-80 grayscale':""}`}/>
      <div className="flex flex-col grow">
        <p className="font-semibold">{name}</p>
        <p className="capitalize italic">{ingredients.join(', ')}</p>
        <div className="flex items-center justify-between text-md font-medium mt-auto">
          
          
          {!soldOut ? <>
          <p>{formatCurrency(unitPrice)}</p>
          {isInCart ? 
          <>
          <UpdateButtons pizzaId={id}/>
          <DeleteButton pizzaId={id}/>
          </>
           :
          <Button type="small" onClick={handleAdd}>Add to Cart</Button>}
          </>
           : <Button type="secondary">Sold Out</Button>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
