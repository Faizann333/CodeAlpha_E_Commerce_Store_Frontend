import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const fetchCart = async () => {
     axios.get(`${API_BASE_URL}/user/get-cart`, { withCredentials: true })
    .then((res) => {
      
      setCart(res.data.cart.items);
      
    })
    .catch((err) => {
      console.log("Error fetching cart data: ", err);
    });
  };

  const addToCart = async (productId) => {
    await axios.post(
      `${API_BASE_URL}/user/add-to-cart`,
      { productId },
      { withCredentials: true }
    );
  toast.success("Product added to cart!");
    fetchCart();
  };

  useEffect(() => {
    fetchCart();
  }, []);



  return (
    <CartContext.Provider value={{ cart, addToCart ,setCart }}>
      {children}
    </CartContext.Provider>
  );
};