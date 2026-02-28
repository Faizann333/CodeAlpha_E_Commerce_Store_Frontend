import { useState,useEffect } from 'react'
import axios from 'axios'
import ProductList from '../../components/ProductList'
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Product = () => {
  const [products, setProducts] = useState([]);

    useEffect(()=>{
              axios.get(`${API_BASE_URL}/user/get-all-available-products`)
              .then((res)=>{ setProducts(res.data.allAvailableProducts)})
    },[])
  
  return (
    <div className='py-3 min-h-screen flex flex-col gap-5 items-center bg-gray-800 justify-start'>
      <h1 className='text-3xl mt-4 font-bold text-gray-100'> ALL Products</h1>
      
      <ProductList products={products} isAdmin={false}/>

    </div>
  )
}

export default Product;