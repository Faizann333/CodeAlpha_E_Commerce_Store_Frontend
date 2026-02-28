import { createContext, useEffect ,useState,useContext} from "react"
import axios from "axios"
import { toast } from "react-toastify";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


export const AdminContext = createContext();

export const AdminProvider = ({children})=>{
    const [users, setUsers] = useState();
    const [products , setProducts ] = useState();
    const [orders, setOrders] = useState();

    
    const getUsers= async ()=>{
        try {
            const res = await axios.get(`${API_BASE_URL}/admin/get-users`,{withCredentials : true});
           
            if(res.data.success){
                setUsers(res.data.users);
            }
        } catch (error) {
            setUsers(Null)
        }
    }

    const getProducts= async ()=>{
        try {
            const res = await axios.get(`${API_BASE_URL}/admin/get-all-products`,{withCredentials : true});
           
            if(res.data.success){
                setProducts(res.data.allProducts);
            
            }
        } catch (error) {
            setProducts(null)
        }
    }

    const getOrders= async ()=>{
        try {
            const res = await axios.get(`${API_BASE_URL}/admin/get-orders`,{withCredentials : true});
            if(res.data.success){
                setOrders(res.data.orders);
            }
            
        } catch (error) {
            console.log('not fetched order')
        }
    }

    const deleteProduct= async (id)=>{
        try {
            const res = await axios.post(`${API_BASE_URL}/admin/delete-product/${id}`,{},{withCredentials : true});
            if(res.data.success){
                getProducts();
                toast.success("Product deleted successfully");
            }
            
        } catch (error) {
            toast.error("Failed to delete product: " + error.response.data.message);
        }
    }

      useEffect(()=>{
            getUsers();
            getOrders();
            getProducts();
        },[]);

    return (
        <AdminContext.Provider value = {{
            users ,products , orders , deleteProduct , getProducts
        }} >
            {children}
        </AdminContext.Provider >
    )
}