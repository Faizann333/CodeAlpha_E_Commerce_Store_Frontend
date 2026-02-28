import Button from '../Button'
import { useNavigate, NavLink } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const AdminNavBar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {

      axios.post(`${API_BASE_URL}/auth/logout`, {}, { withCredentials: true })
        .then((res) => {
          toast.success("Logout successful!");  
          navigate('/');
        })
        .catch((err) => {
          toast.error("Logout failed: " + err.response.data.message);
        });
      }
    return (
        <header className='flex justify-between items-center sticky z-50 top-[-10px] h-[70px] bg-black text-gray-100 px-4'>
            <div className="ml-6 font-bold text-2xl">FLONE</div>
            <nav className='flex items-center gap-3'>
                <ul className="flex gap-7 pr-9">
                     <li className="hidden sm:block relative  px-1">
                        <NavLink
                            to="/admin/dashboard"
                            className={({ isActive }) =>
                                `relative inline-block px-1 before:content-[''] before:absolute before:-bottom-1 before:left-0 
       before:h-[2px] before:w-0 before:transition-all before:duration-300 before:bg-purple-500
       ${isActive ? "before:w-full" : "hover:before:w-full"}`
                            }
                        >
                            Dashboard
                        </NavLink>
                    </li>
                    <li className="hidden sm:block relative  px-1">
                        <NavLink
                            to="/admin/add-product"
                            className={({ isActive }) =>
                                `relative inline-block px-1 before:content-[''] before:absolute before:-bottom-1 before:left-0 
       before:h-[2px] before:w-0 before:transition-all before:duration-300 before:bg-purple-500
       ${isActive ? "before:w-full" : "hover:before:w-full"}`
                            }
                        >
                            Add Product
                        </NavLink>
                    </li>
                    <li className="hidden sm:block relative  px-1">
                        <NavLink
                            to="/admin/manage-products"
                            className={({ isActive }) =>
                                `relative inline-block px-1 before:content-[''] before:absolute before:-bottom-1 before:left-0 
       before:h-[2px] before:w-0 before:transition-all before:duration-300 before:bg-purple-500
       ${isActive ? "before:w-full" : "hover:before:w-full"}`
                            }
                        >
                            Manage Products
                        </NavLink>
                    </li>

                    <li className="hidden sm:block relative  px-1">
                        <NavLink
                            to="/admin/orders"
                            className={({ isActive }) =>
                                `relative inline-block px-1 before:content-[''] before:absolute before:-bottom-1 before:left-0 
       before:h-[2px] before:w-0 before:transition-all before:duration-300 before:bg-purple-500
       ${isActive ? "before:w-full" : "hover:before:w-full"}`
                            }
                        >
                            Orders
                        </NavLink>
                    </li>


                    <li className="hidden sm:block relative  px-1">
                        <NavLink
                            to="/admin/users"
                            className={({ isActive }) =>
                                `relative inline-block px-1 before:content-[''] before:absolute before:-bottom-1 before:left-0 
       before:h-[2px] before:w-0 before:transition-all before:duration-300 before:bg-purple-500
       ${isActive ? "before:w-full" : "hover:before:w-full"}`
                            }
                        >
                            Users
                        </NavLink>
                    </li>
                  


                </ul>

            </nav>
            <div className='flex gap-3'> 
                <Button name="Logout" onClick={handleLogout} />
                <Button name="User Panel" onClick={()=> navigate("/")} />
            </div>
        </header>
    )
}
      
      
      
      
export default AdminNavBar;