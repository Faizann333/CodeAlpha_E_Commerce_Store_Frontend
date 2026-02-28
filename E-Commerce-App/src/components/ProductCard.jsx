import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { useContext } from "react";
import { CartContext } from "../store/CartContext";
import { AdminContext } from "../store/AdminContext";

const ProductCard = ({ product, isAdmin }) => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const {deleteProduct} = useContext(AdminContext)


  return (
    <div className="border-2 border-purple-600 bg-gray-800  rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden w-[280px] flex flex-col">

      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Featured Badge */}
        {product.featured && (
          <span className="absolute top-3 left-3 bg-green-400 text-black text-xs font-semibold px-3 py-1 rounded-full shadow">
            ⭐ Featured
          </span>
        )}

        {/* Availability Badge */}
        {/* <span
          className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full shadow ${product.isAvailable
            ? "bg-green-500 text-white"
            : "bg-red-500 text-white"
            }`}
        >
          {product.isAvailable ? "In Stock" : "Out of Stock"}
        </span> */}
      </div>

      {/* Content Section */}
      <div className="flex flex-col text-white flex-grow p-4">

        {/* Category */}
        <p className="text-xs text-white-500 uppercase tracking-wide">
          {product.category}
        </p>

        {/* Product Name */}
        <h2 className="text-lg font-semibold text-white-800 mt-1 line-clamp-2">
          {product.name}
        </h2>

        {/* Price */}
        <p className="text-xl font-bold text-green-600 mt-3">
          Rs. {product.price}
        </p>

        {/* Stock Info */}
        <p className="text-sm text-gray-200 my-2">
          {product.stock} items left
        </p>

        {/* Button */}
        <Button
          name="View Details"
          className="mt-auto bg-black w-full text-white py-2 rounded-xl hover:bg-gray-800 transition duration-300 font-medium"
          onClick={() => navigate(`/product-detail/${product._id}`)}
        />
        <div>
          <Button
            name="Add to Cart"
            className=" w-full mt-2 bg-purple-700"
            onClick={() => addToCart(product._id)}
          />

          {isAdmin && (
            <div className="flex gap-2 mt-2">
              <Button
                name="Edit"
                className=" w-[120px]"
                onClick={() => navigate(`/admin/edit-product/${product._id}`)}
              />
              <Button
                name="Delete"
                className=" w-[120px] bg-red-600 hover:bg-red-700"
                onClick={() => deleteProduct(product._id)}
              />
            </div>
          )}
        </div>
      </div>

    </div>

  );
};

export default ProductCard;