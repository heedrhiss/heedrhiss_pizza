import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../services/apiRestaurant";
import Button from "../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getTotalPrice } from "../cart/CartSlice";
import store from '../../store';
import { formatCurrency } from "../utilities/helpers";
import { fetchAddress } from "../user/userSlice";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );


function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const {username, address, status, position, error} = useSelector(state=> state.user)
  const navigation = useNavigation()
  const submitting = navigation.state === 'submitting'
  const formErrors = useActionData();
  const totalPrice = useSelector(getTotalPrice)
  const priority = withPriority ? totalPrice * 0.2 : 0;
  const finalPrice = totalPrice + priority;

  const cart = useSelector(state=> state.cart.cart)
  const dispatch = useDispatch();
  const isLoading = status === 'loading';

  return (
    <div className="px-1">
      <h2 className="font-semibold text-xl my-8">Ready to order? Let's go!</h2>
      <Form method="POST">
        <div className="flex flex-col sm:flex-row mb-7 sm:items-center grow">
          <label className="sm:basis-40">First Name</label>
          <input className="input grow" type="text" name="customer" defaultValue={username} required />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center mb-7">
          <label className="sm:basis-40">Phone Number</label>
          <div className="grow">
            <input className="input w-full" type="tel" name="phone" required />
            {formErrors?.phone && <p className="text-red-700 bg-red-200 rounded-xl py-1 px-3 text-sm mt-1 italic">{formErrors.phone}</p>}
          </div>
        </div>

        <div className="relative flex flex-col sm:flex-row sm:items-center mb-7">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input className="input w-full" type="text" disabled={isLoading} defaultValue={address} name="address" required />
            {error && <p className="text-red-700 bg-red-200 rounded-xl py-1 px-3 text-sm mt-1 italic">{error}</p>}
          </div>
          {!address && <span className="absolute right-0 top-6 sm:top-0"><Button type="primary" onClick={(e)=>{
            e.preventDefault()
            dispatch(fetchAddress())}}>Get position</Button></span>}
        </div>

        <div className="flex items-center space-x-3 font-semibold mb-7">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={e=> setWithPriority(e.target.checked)}
            className="h-6 w-6 accent-yellow-300 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-yellow-300"
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
        <input type="hidden" name="cart" value={JSON.stringify(cart)} />
        <input type="hidden" name="position" value={position ? `${position.latitude},${position.longitude}`: ""}/>
        <Button disabled={submitting || isLoading} type="primary">{submitting ? "Placing Order..." : `Order now ${formatCurrency(finalPrice)}`}</Button>
        </div>
      </Form>
    </div>
  );
}

export async function createAction({request}){
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  const order = {...data, cart: JSON.parse(data.cart), priority: data.priority === "true"}
  
  const errors = {};

  if(!isValidPhone(order.phone))
  errors.phone = "Please provide a valide phone number...!";
  if(Object.keys(errors).length >0) return errors

  const newOrder = await createOrder(order)
  store.dispatch(clearCart())

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
