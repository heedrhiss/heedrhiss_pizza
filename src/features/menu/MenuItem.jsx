import Button from "../ui/Button";
import { formatCurrency } from "../utilities/helpers";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex gap-4 py-2">
      <img src={imageUrl} alt={name} className={`h-28 ${soldOut ? 'opacity-80 grayscale':""}`}/>
      <div className="flex flex-col grow">
        <p className="font-semibold">{name}</p>
        <p className="capitalize italic">{ingredients.join(', ')}</p>
        <div className="flex items-center justify-between text-md font-medium mt-auto">
          {!soldOut ? <>
          <p>{formatCurrency(unitPrice)}</p>
          <Button type="small">Add to Cart</Button>
          </>
           : <p className="text-stone-500">Sold out</p>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
