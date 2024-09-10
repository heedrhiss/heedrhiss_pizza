// Test ID: IIDSAT
// Test ID: CQE92U

import { useFetcher, useLoaderData } from "react-router-dom";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../features/utilities/helpers";
import { getOrder } from "../services/apiRestaurant";
import OrderItem from "./OrderItem";
import { useEffect } from "react";


function Order() {
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const order = useLoaderData();
  const fetcher = useFetcher();
  const isLoadingIngredients = fetcher.status === "loading";

  useEffect(function(){
    if(!fetcher.data) fetcher.load('/menu')
  },[fetcher])
  console.log(fetcher.data)
  
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order

  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <h2 className="text-xl font-bold sm:text-2xl">Order #{order.id} Status</h2>

        <div className="space-x-2">
          {priority && <span className="bg-red-600 text-red-100 uppercase text-sm rounded-full px-3 py-1">Priority</span>}
          <span className="bg-green-600 text-green-100 uppercase text-sm rounded-full px-3 py-1">{status} order</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 items-center justify-between bg-slate-300 p-6">
        <p className="font-semibold">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <ul className="divide-y divide-slate-300 border-b border-slate-300">{cart.map(item => <OrderItem item={item} key={item.pizzaId}
      ingredients={fetcher?.data.find((el)=> el.id===item.pizzaId).ingredients}
      isLoadingIngredients={isLoadingIngredients}/>)}</ul>

      <div className="bg-slate-300 p-6">
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className="font-semibold">To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
}

export async function orderLoader({params}){
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
