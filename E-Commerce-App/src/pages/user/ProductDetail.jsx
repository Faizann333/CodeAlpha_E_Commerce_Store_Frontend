import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState ,useContext } from "react";
import { CartContext } from "../../store/CartContext";
import Button from "../../components/Button";


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [quantity, setQuantity] = useState(1);
    const { addToCart } = useContext(CartContext);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API_BASE_URL}/user/get-product-by-id/${id}`)
      .then((res) => {
        setProduct(res.data.product);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load product.");
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Loading product...
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 text-lg">
        {error}
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl p-8 grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE - IMAGE */}
        <div className="flex justify-center items-center bg-gray-50 rounded-xl p-6">
          <img
            src={product?.imageUrl}
            alt={product?.name}
            className="max-h-[450px] object-contain rounded-xl"
          />
        </div>

        {/* RIGHT SIDE - DETAILS */}
        <div className="flex flex-col justify-between">

          <div>
            {/* Category */}
            <p className="text-sm text-gray-500 uppercase tracking-wide">
              {product?.category}
            </p>

            {/* Product Name */}
            <h1 className="text-3xl font-bold mt-2 text-gray-800">
              {product?.name}
            </h1>

            {/* Featured Badge */}
            {product?.featured && (
              <span className="inline-block mt-3 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full">
                ⭐ Featured Product
              </span>
            )}

            {/* Price */}
            <p className="text-3xl font-bold text-green-600 mt-6">
              ${product?.price}
            </p>

            {/* Stock & Availability */}
            <div className="mt-4">
              {product?.isAvailable ? (
                <span className="text-green-600 font-medium">
                  In Stock ({product?.stock} items left)
                </span>
              ) : (
                <span className="text-red-600 font-medium">
                  Out of Stock
                </span>
              )}
            </div>

            {/* Description */}
            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-2">Description</h2>
              <p className="text-gray-600 leading-relaxed">
                {product?.description}
              </p>
            </div>
          </div>

          {/* PURCHASE SECTION */}
          <div className="mt-8 border-t pt-6">

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 mb-4">
              <span className="font-medium">Quantity:</span>
              <input
                type="number"
                min="1"
                max={product?.stock}
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-20 border rounded-lg p-2 text-center"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-4 w-full">
              <Button
                name="Add to Cart"
                className=" w-[550px] text-white  mt-2 bg-purple-700"
                onClick={() => addToCart(product._id)}
              />

              {/* <button className="flex-1 py-3 rounded-xl border border-black font-semibold hover:bg-gray-100 transition">
                Buy Now
              </button> */}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;














// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { useEffect, useState } from "react";
// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

// const ProductDetail = () => {
//     const { id } = useParams();
//     const [product, setProduct] = useState(null);

//     useEffect(() => {
//         axios
//             .get(`${API_BASE_URL}/user/get-product-by-id/${id}`)
//             .then((res) => setProduct(res.data.product))
//             .catch((err) => console.log(err));
//     }, [id]);

//     return (
//         <div className="flex flex-col  gap-8 p-4 min-h-screen bg-green-400">
//             <div className="w-full  flex gap-5 bg-yellow-400">
//                 <img src={product?.imageUrl} alt={product?.name} className="w-1/2 h-64 object-cover rounded-md" />
//                 <div>
//                     <h1>{product?.name}</h1>
//                     <p>Price: ${product?.price}</p>
//                     <p>Category: {product?.category}</p>
//                     <p>Stock: {product?.stock}</p>
//                     <p>{product?.isAvailable ? 'Available' : 'Out of Stock'}</p>
//                 </div>
//             </div>
//             <div className="w-full  bg-red-600 p-4 rounded-md shadow-md">
//                 <h1>Description:</h1><br />
//                 <p>{product?.description}</p>
//             </div>
//         </div>
//     )
// };

// export default ProductDetail;
