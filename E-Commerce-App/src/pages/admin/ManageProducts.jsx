import { useState,useEffect , useContext } from 'react'
import axios from 'axios'
import ProductList from '../../components/ProductList'
import { AdminContext } from '../../store/AdminContext'
import Loader from '../../components/loader/Loader';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ManageProducts = () => {
  const {products} = useContext(AdminContext)
  

  return (
    <div className='py-3 min-h-screen flex flex-col gap-5 items-center bg-gray-800 justify-start'>
      <h1 className='text-3xl mt-4 font-bold text-gray-100'> ALL Products</h1>
      {products ? (
           <ProductList products={products} isAdmin={true} />
      ):
      <Loader/>
      
      }
     
    </div>
  )
}

export default ManageProducts;