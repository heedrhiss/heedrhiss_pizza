import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './features/ui/Home';
import Cart from "./features/cart/Cart";
import Menu from "./features/menu/Menu"
import Order from "./features/order/Order";
import AppLayout from "./features/ui/AppLayout";
import CreateOrder from "./features/order/CreateOrder"

const router = createBrowserRouter([
  {element: <AppLayout/>,
   children: [
   {path: '/',      element: <Home /> },
   {path: '/cart',  element: <Cart /> },
   {path: '/menu',  element: <Menu/>  },
   {path: '/order', element: <Order/> },
   {path: '/order/new', element: <CreateOrder/>}
  ]}
])

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
