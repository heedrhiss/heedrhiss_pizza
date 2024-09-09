import { useDispatch, useSelector } from "react-redux"
import Button from "./Button"
import { decQuantity, getCartQuantity, incQuantity } from "../cart/CartSlice"

function UpdateButtons({pizzaId}) {
    const dispatch = useDispatch()
    const getQuantity = useSelector(getCartQuantity(pizzaId));

    return (
        <div className="flex gap-1 sm:gap-3 items-center justify-center">
            <Button type='update' onClick={()=>dispatch(decQuantity(pizzaId))}>-</Button>
            {getQuantity}
            <Button type='update' onClick={()=>dispatch(incQuantity(pizzaId))}>+</Button>
        </div>
    )
}

export default UpdateButtons
