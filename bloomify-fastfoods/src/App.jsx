import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Cart from "./feature/cart/Cart";
import CreateOrder, {action as createOrderAction} from "./feature/order/CreateOrder";
import Order, {loader as orderLoader} from "./feature/order/Order";
import Burgermenu, {loader as getBurgerLoader} from "./feature/menu/Burgermenu";
import Pizzamenu, {loader as getPizzaLoader} from "./feature/menu/Pizzamenu";
import Tacobarmenu, {loader as getTacobarLoader} from "./feature/menu/Tacobarmenu";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error"
import Aboutus from "./ui/Aboutus";


const router = createBrowserRouter([
 {
  element: <AppLayout/>,
  errorElement: <Error/>,
  
  children: [
    { path: "/", element: <Home/>},
    { path: "/burgermenu", element: <Burgermenu/>, loader: getBurgerLoader, errorElement: <Error />, },
    { path: "/pizzamenu", element: <Pizzamenu/>, loader: getPizzaLoader, errorElement: <Error />,},
    { path: "/tacobarmenu", element: <Tacobarmenu/>, loader: getTacobarLoader, errorElement: <Error />,},
    {path: "/aboutus", element: <Aboutus/>, errorElement: <Error/>},
    { path: "/cart", element: <Cart />, },
    { path: "/order/new", element: <CreateOrder />, action: createOrderAction },

    {
      path: "/order/:orderId",
      element: <Order />,
      loader: orderLoader,
      errorElement: <Error />,
     },
  ]
 }
])



function App() {

  return (
    <RouterProvider router={router} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}/>
  )
}

export default App
