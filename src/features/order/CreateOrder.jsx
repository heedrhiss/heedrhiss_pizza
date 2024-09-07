import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../services/apiRestaurant";
import Button from "../ui/Button";
import { useSelector } from "react-redux";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  const username = useSelector(state=> state.user.username)
  const navigation = useNavigation()
  const submitting = navigation.state === 'submitting'
  const formErrors = useActionData()

  const cart = fakeCart;

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

        <div className="flex flex-col sm:flex-row sm:items-center mb-7">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input className="input w-full" type="text" name="address" required />
          </div>
        </div>

        <div className="flex items-center space-x-3 font-semibold mb-7">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="h-6 w-6 accent-yellow-300 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-yellow-300"
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
        <input type="hidden" name="cart" value={JSON.stringify(cart)} />
        <Button disabled={submitting} type="primary">{submitting ? "Placing Order..." : "Order now"}</Button>
        </div>
      </Form>
    </div>
  );
}

export async function createAction({request}){
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  const order = {...data, cart: JSON.parse(data.cart), priority: data.priority === "on"}
  
  const errors = {};

  if(!isValidPhone(order.phone))
  errors.phone = "Please provide a valide phone number...!";
  if(Object.keys(errors).length >0) return errors

  const newOrder = await createOrder(order)

  console.log(newOrder)

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
