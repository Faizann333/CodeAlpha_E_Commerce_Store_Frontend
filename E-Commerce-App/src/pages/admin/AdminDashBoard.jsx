import React, { useContext, useMemo } from "react";
import { AdminContext } from "../../store/AdminContext";

const AdminDashboard = () => {
  const { users, orders, products } = useContext(AdminContext);

  // 📊 Calculations
  const totalRevenue = useMemo(() => {
    return orders?.reduce((acc, order) => acc + order.totalAmount, 0) || 0;
  }, [orders]);

  return (
    <div className="p-8  bg-gray-800 min-h-screen">

      {/* Page Title */}
      <h1 className="text-3xl text-center font-bold mb-8 text-white">
        Admin Dashboard
      </h1>

      {/* 🔢 Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">

        <div className="bg-gray-700 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <h2 className="text-gray-300 text-sm">Total Users</h2>
          <p className="text-2xl font-bold text-blue-600">
            {users?.length || 0}
          </p>
        </div>

        <div className="bg-gray-700 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <h2 className="text-gray-300 text-sm">Total Products</h2>
          <p className="text-2xl font-bold text-green-600">
            {products?.length || 0}
          </p>
        </div>

        <div className="bg-gray-700 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <h2 className="text-gray-300 text-sm">Total Orders</h2>
          <p className="text-2xl font-bold text-purple-600">
            {orders?.length || 0}
          </p>
        </div>

        <div className="bg-gray-700 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <h2 className="text-gray-300 text-sm">Total Revenue</h2>
          <p className="text-2xl font-bold text-red-600">
            ${totalRevenue}
          </p>
        </div>

      </div>

      {/* 🧾 Recent Orders Section */}
      <div className="bg-gray-700 p-6 rounded-2xl shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-300">
          Recent Orders
        </h2>

        <div className="space-y-4">
          {orders?.slice(0, 5).map((order) => (
            <div
              key={order._id}
              className="flex justify-between items-center border-b pb-3"
            >
              <div>
                <p className="font-semibold text-gray-300">
                  Order ID: {order._id.slice(-6)}
                </p>
                <p className="text-sm text-gray-400">
                  {new Date(order.createdAt).toLocaleString()}
                </p>
              </div>

              <div className="text-right">
                <p className="font-semibold">
                  ${order.totalAmount}
                </p>
                <span className="text-xs bg-green-400 text-black px-2 py-1 rounded-full">
                  {order.orderStatus}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default AdminDashboard;