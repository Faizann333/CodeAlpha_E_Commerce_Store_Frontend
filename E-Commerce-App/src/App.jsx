import { RouterProvider } from "react-router-dom"
import router from "./router/routes"
import { AuthProvider } from "./store/AuthContext"
import { CartProvider } from "./store/CartContext"
import { OrderProvider } from "./store/OrderContext"
import { AdminProvider } from "./store/AdminContext"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <AuthProvider>
      <OrderProvider>
      <CartProvider>
        <AdminProvider>
          <ToastContainer position="top-right" autoClose={1000} toastClassName="!mt-[80px] !mr-2"/>
           <RouterProvider router={router} />
        </AdminProvider>
      </CartProvider>
      </OrderProvider>
     
    </AuthProvider>
  )
}

export default App
