import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from './features/ui/Home';
import Error from './features/ui/Error';
import Cart from "./features/cart/Cart";
import AppLayout from "./features/ui/AppLayout";
import Menu, {menuLoader} from "./features/menu/Menu"
import Order, {orderLoader} from "./features/order/Order";
import CreateOrder, {createAction} from "./features/order/CreateOrder"
import { updateAction } from "./features/ui/UpdateButton";

const router = createBrowserRouter([
  {element: <AppLayout/>,
  errorElement: <Error/>,
   children: [
   {path: '/',      element: <Home /> },
   {path: '/cart',  element: <Cart />, errorElement: <Error/>, },
   {path: '/menu',  element: <Menu/> , errorElement: <Error/> , loader: menuLoader},
   {path: '/order/new', element: <CreateOrder/>, errorElement: <Error/>, action: createAction},
   {path: '/order/:orderId', element: <Order/> , errorElement: <Error/> ,
    action: updateAction, loader: orderLoader}
  ]}
])

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
