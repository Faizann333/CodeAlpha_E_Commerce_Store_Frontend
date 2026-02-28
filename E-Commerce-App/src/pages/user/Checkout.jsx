import { useState, useContext } from "react";
import { CartContext } from "../../store/CartContext";
import { OrderContext } from "../../store/OrderContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Checkout = () => {
  const { cart , setCart } = useContext(CartContext);
  const { placeOrder } = useContext(OrderContext);
  const navigate = useNavigate();

  const [shippingAddress, setShippingAddress] = useState({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const handleChange = (e) => {
    setShippingAddress({
      ...shippingAddress,
      [e.target.name]: e.target.value,
    });
  };

  const totalPrice =
    cart?.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    ) || 0;

  const handlePlaceOrder = async () => {
    try {
      const data = await placeOrder(shippingAddress);
      setCart([]); // Clear cart after placing order
      navigate("/cart/checkout/order-success");

       
    } catch (error) {
      toast.error("Please Provide Shipping Address ! " );
      console.log(error);
    }
  };

  return (
    <div className="min-h-[80vh] px-6 md:px-16 py-10 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid md:grid-cols-2 gap-10">
        
        {/*  Shipping Form */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-6">
            Shipping Information
          </h2>

          <div className="space-y-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={shippingAddress.fullName}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={shippingAddress.phone}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="text"
              name="address"
              placeholder="Address"
              value={shippingAddress.address}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="text"
              name="city"
              placeholder="City"
              value={shippingAddress.city}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="text"
              name="postalCode"
              placeholder="Postal Code"
              value={shippingAddress.postalCode}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />
          </div>
        </div>

        {/*  Order Summary */}
        <div className="bg-white p-6 rounded-xl shadow-sm h-fit">
          <h2 className="text-xl font-semibold mb-6">
            Order Summary
          </h2>

          <div className="space-y-4">
            {cart?.map((item) => (
              <div
                key={item.product._id}
                className="flex justify-between text-sm"
              >
                <span>
                  {item.product.name} × {item.quantity}
                </span>
                <span>
                  Rs {item.product.price * item.quantity}
                </span>
              </div>
            ))}
          </div>

          <hr className="my-6" />

          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>Rs {totalPrice}</span>
          </div>

          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span>Rs 200</span>
          </div>

          <div className="flex justify-between font-bold text-lg mt-4">
            <span>Total</span>
            <span>Rs {totalPrice + 200}</span>
          </div>

          <button
            onClick={handlePlaceOrder}
            className="w-full bg-black text-white py-3 rounded-lg mt-6 hover:opacity-80 transition"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;