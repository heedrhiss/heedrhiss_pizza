import { useDispatch } from "react-redux";
import Button from "./Button"
import { delItem } from "../cart/CartSlice";

function DeleteButton({pizzaId}) {
    const dispatch = useDispatch();

    return (
        <Button type="small" onClick={()=> dispatch(delItem(pizzaId))}>Delete</Button>
    )
}

export default DeleteButton
