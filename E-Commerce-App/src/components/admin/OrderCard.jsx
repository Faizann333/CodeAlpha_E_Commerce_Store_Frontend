import React, { useState } from "react";
import Button from "../Button";

const OrderCard = ({ order }) => {
  const [showItems, setShowItems] = useState(false);

  return (
    <div className="bg-gray-800 shadow-md rounded-xl p-6 mb-6 hover:shadow-lg transition">

      {/* Top Section */}
      <div className="flex justify-between items-center border-b pb-4">
        <div>
          <h2 className="text-lg font-bold text-gray-300">
            Order ID: {order._id}
          </h2>
          <p className="text-sm text-gray-400">
            {new Date(order.createdAt).toLocaleString()}
          </p>
        </div>

        <div className="text-right">
          <p className="font-semibold text-gray-300">
            Total: ${order.totalAmount}
          </p>
        </div>
      </div>

      {/* Status Section */}
      <div className="flex justify-between mt-4">
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold 
            bg-green-400 text-black
              
          }`}
        >
          Order: {order.orderStatus}
        </span>

        {/* <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            order.paymentStatus === "Pending"
              ? "bg-red-100 text-red-600"
              : "bg-green-100 text-green-600"
          }`}
        >
          Payment: {order.paymentStatus}
        </span> */}
      </div>

      {/* Shipping Address */}
      <div className="mt-4 bg-gray-700 p-4 rounded-lg">
        <h3 className="font-semibold text-gray-300 mb-2">
          Shipping Address
        </h3>
        <p className="text-sm">{order.shippingAddress.fullName}</p>
        <p className="text-sm">{order.shippingAddress.phone}</p>
        <p className="text-sm">{order.shippingAddress.address}</p>
        <p className="text-sm">
          {order.shippingAddress.city} - {order.shippingAddress.postalCode}
        </p>
      </div>

      {/* Items Toggle Button */}
    
          <div className="flex justify-between mt-3 ">
              <button
        onClick={() => setShowItems(!showItems)}
        className="mt-4 text-blue-500 text-sm font-semibold"
      >
        {showItems ? "Hide Items" : `View Items (${order.items.length})`}
      </button>
      <Button name="Mark Complete" className={"bg-purple-600 text-white"}/>
          </div>
      {/* Items List */}
      {showItems && (
        <div className="mt-3 border-t pt-3">
            {/* <table>
                  <tr className="flex justify-between">
             <td>Name </td>
             <td>Quantity</td>
             <li>Price</li>
             <li>Category</li>
             <li>Stock</li>
            </tr>
            </table> */}
          
          {order.items.map((item, index) => (
            <div key={index} className="flex justify-between text-white text-sm py-1">
              <span>{item.product.name}</span>
              <span>Qty: {item.quantity}</span>
               <span>{item.price}</span>
              
               <span>{item.product.category}</span>
                <span> Stock : {item.product.stock}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderCard;