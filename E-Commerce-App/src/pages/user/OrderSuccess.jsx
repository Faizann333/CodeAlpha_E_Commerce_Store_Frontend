import { useNavigate, useLocation } from "react-router-dom";

const OrderSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Optional: receive order data from navigate
  const order = location.state?.order;

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-6">
      <div className="bg-white shadow-lg rounded-2xl p-10 max-w-lg w-full text-center">
        
        {/* ✅ Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 flex items-center justify-center bg-green-100 rounded-full">
            <svg
              className="w-10 h-10 text-green-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* 🎉 Message */}
        <h1 className="text-2xl font-bold mb-3">
          Order Placed Successfully!
        </h1>

        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your order has been received and is being processed.
        </p>

        {/* 🧾 Order Info */}
        {order && (
          <div className="bg-gray-100 rounded-lg p-4 mb-6 text-left">
            <p className="text-sm">
              <span className="font-semibold">Order ID:</span>{" "}
              {order._id}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Total Amount:</span>{" "}
              Rs {order.totalAmount}
            </p>
          </div>
        )}

        {/* 🔘 Buttons */}
        <div className="flex flex-col gap-3">
        
          <button
            onClick={() => navigate("/")}
            className="border border-gray-700 py-3 text-white rounded-lg bg-gray-800 hover:bg-gray-100 hover:text-black transition"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;