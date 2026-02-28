// store/OrderContext.jsx
import { createContext } from "react";
import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {

  const placeOrder = async (shippingAddress) => {
    console.log("order placed ")
    const res = await axios.post(
      `${API_BASE_URL}/user/place-order`,
      { shippingAddress },
      { withCredentials: true }
    );

    return res.data;
  };

  return (
    <OrderContext.Provider value={{ placeOrder }}>
      {children}
    </OrderContext.Provider>
  );
};