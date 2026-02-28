import { createBrowserRouter } from "react-router-dom"
import ProtectedRoute from "./ProtectedRoute"

//user routes
import Home from "../pages/user/Home"
import Product from "../pages/user/Product"
import ProductDetail from "../pages/user/ProductDetail"
import AboutUs from "../pages/user/AboutUs"
import ContactUs from "../pages/user/ContactUs"
import UserLayout from "../layouts/UserLayout"
import SignUp from "../pages/SignUp"
import Login from "../pages/Login"
import Cart from "../pages/user/Cart"
import Checkout from "../pages/user/Checkout"
import OrderSuccess from "../pages/user/OrderSuccess"

//admin imports
import AdminLayout from "../layouts/AdminLayout"
import AdminDashboard from "../pages/admin/AdminDashBoard"
import AddProduct from "../pages/admin/AddProduct"
import ManageProducts from "../pages/admin/ManageProducts"
import Orders from "../pages/admin/Orders"
import Users from "../pages/admin/Users"


const router = createBrowserRouter([

    { path: "/", element: <UserLayout/>,
        children:[
            {path:"/", element: <Home/>},
            {path:"/products", element: <Product/>},
            {path:"/product-detail/:id", element: <ProductDetail/>},
            {path:"/about-us", element: <AboutUs/>},
            {path:"/contact-us", element: <ContactUs/>},
            {path:"/cart", element: <ProtectedRoute><Cart/></ProtectedRoute>},
            {path:"/cart/checkout" , element : <ProtectedRoute><Checkout/></ProtectedRoute> },
            {path:"/cart/checkout/order-success" , element : <ProtectedRoute><OrderSuccess/></ProtectedRoute>},
            {path:"/sign-up", element: <SignUp/>},
            {path:"/login", element: <Login/>},
        ]
    },

    {path: 'admin', element: <AdminLayout/>,
        children:[
            
        {path: 'dashboard', element: <AdminDashboard/>},
        {path: 'add-product', element: <AddProduct/>},
        {path: 'manage-products', element: <ManageProducts/>},
        {path: 'orders', element: <Orders/>},
        {path: 'users', element: <Users/>},

        ]
    }

])

export default router