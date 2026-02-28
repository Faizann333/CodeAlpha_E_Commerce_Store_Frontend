import { useContext } from "react";
import { CartContext } from "../../store/CartContext";
import { useNavigate } from "react-router-dom";


const Cart = () => {
  const { cart } = useContext(CartContext);
  
  const navigate = useNavigate();

  const totalPrice =
    cart?.items?.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    ) || 0;

  if (!cart || cart.length === 0) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-600">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <button
          onClick={() => navigate("/")}
          className="bg-black text-white px-6 py-2 rounded-lg hover:opacity-80 transition"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
  
  
    
    <div className="min-h-[80vh] px-6 md:px-16 py-10 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      <div className="grid md:grid-cols-3 gap-10">
        
        {/* 🛍️ Cart Items */}
        <div className="md:col-span-2 space-y-6">
          {cart &&cart.map((item) => (
            <div
              key={item.product._id}
              className="bg-white p-5 rounded-xl shadow-sm flex items-center justify-between"
            >
              <div className="flex items-center gap-5">
                <img
                  src={item.product.imageUrl}
                  alt={item.product.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div>
                  <h2 className="font-semibold text-lg">
                    {item.product.name}
                  </h2>
                  <p className="text-gray-500">
                    Rs {item.product.price}
                  </p>
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() =>
                    updateQuantity(item.product._id, item.quantity - 1)
                  }
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  -
                </button>

                <span className="font-semibold">
                  {item.quantity}
                </span>

                <button
                  onClick={() =>
                    updateQuantity(item.product._id, item.quantity + 1)
                  }
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  +
                </button>
              </div>

              {/* Subtotal + Remove */}
              <div className="text-right">
                <p className="font-semibold">
                  Rs {item.product.price * item.quantity}
                </p>
                <button
                  onClick={() => removeFromCart(item.product._id)}
                  className="text-red-500 text-sm mt-1 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 🧾 Order Summary */}
        <div className="bg-white p-6 rounded-xl shadow-sm h-fit">
          <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

          <div className="flex justify-between mb-3">
            <span>Subtotal</span>
            <span>Rs {totalPrice}</span>
          </div>

          <div className="flex justify-between mb-3">
            <span>Shipping</span>
            <span>Rs 200</span>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>Rs {totalPrice + 200}</span>
          </div>

          <button
            onClick={() => navigate("/cart/checkout")}
            className="w-full bg-black text-white py-3 rounded-lg mt-6 hover:opacity-80 transition"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;



