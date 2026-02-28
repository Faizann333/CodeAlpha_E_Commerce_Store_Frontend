import { useState } from 'react';
import axios from 'axios';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const AddProduct = () => {

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        category: '',

        imageUrl: '',
        stock: '',
        featured: false,
        isAvailable: true
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({    
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    }   


    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post(`${API_BASE_URL}/admin/add-product`, formData).then((res)=>{
            alert("Product added successfully");
            
            // setFormData({
            //     name: '',
            //     description: '',
            //     price: '',
            //     category: '',
            //     imageUrl: '',
            //     stock: '',
            //     featured: false,
            //     isAvailable: true
            // })
        }).catch((err)=>{
            alert("Error adding product: " + err.message);
        })
    }
    
return (
    <div className="min-h-screen bg-gray-800 flex justify-center items-center p-6">
      <div className="bg-gray-700 shadow-lg rounded-2xl p-8 w-full max-w-2xl text-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Add New Product
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />

          {/* Description */}
          <textarea
            name="description"
            placeholder="Product Description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />

          {/* Price */}
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />

          {/* Category */}
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />

          {/* Image URL */}
          <input
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            value={formData.imageUrl}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />

          {/* Stock */}
          <input
            type="number"
            name="stock"
            placeholder="Stock Quantity"
            value={formData.stock}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />

          {/* Featured */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="featured"
              checked={formData.featured}
              onChange={handleChange}
            />
            <label>Featured Product</label>
          </div>

          {/* Available */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="isAvailable"
              checked={formData.isAvailable}
              onChange={handleChange}
            />
            <label>Available</label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-700 text-white py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;