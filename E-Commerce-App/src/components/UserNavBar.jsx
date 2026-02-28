import { useContext } from 'react'
import Button from './Button'
import { useNavigate, NavLink } from 'react-router-dom'
import { AuthContext } from '../store/AuthContext'
import axios from 'axios';
import { toast } from 'react-toastify';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const UserNavBar = () => {
    const {user, setUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
      axios.post(`${API_BASE_URL}/auth/logout`, {}, { withCredentials: true })
        .then((res) => {
          navigate("/");
            setUser(false);
          toast.success("Logout successful!");
        })
        .catch((err) => {
          console.log(err);
        });
    };

    return (
        <header className='flex justify-between items-center sticky z-50 top-[-10px] h-[70px] bg-black text-gray-100 px-4'>
            <div className="ml-6 font-bold text-2xl">FLONE</div>
            <nav className='flex items-center gap-3'>
                <ul className="flex gap-7 pr-9">
                    <li className="hidden sm:block relative  px-1">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `relative inline-block px-1 before:content-[''] before:absolute before:-bottom-1 before:left-0 
       before:h-[2px] before:w-0 before:transition-all before:duration-300 before:bg-purple-500
       ${isActive ? "before:w-full" : "hover:before:w-full"}`
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="hidden sm:block relative  px-1">
                        <NavLink
                            to="/products"
                            className={({ isActive }) =>
                                `relative inline-block px-1 before:content-[''] before:absolute before:-bottom-1 before:left-0 
       before:h-[2px] before:w-0 before:transition-all before:duration-300 before:bg-purple-500
       ${isActive ? "before:w-full" : "hover:before:w-full"}`
                            }
                        >
                            Products
                        </NavLink>
                    </li>

                    <li className="hidden sm:block relative  px-1">
                        <NavLink
                            to="/about-us"
                            className={({ isActive }) =>
                                `relative inline-block px-1 before:content-[''] before:absolute before:-bottom-1 before:left-0 
       before:h-[2px] before:w-0 before:transition-all before:duration-300 before:bg-purple-500
       ${isActive ? "before:w-full" : "hover:before:w-full"}`
                            }
                        >
                            About Us
                        </NavLink>
                    </li>


                    <li className="hidden sm:block relative  px-1">
                        <NavLink
                            to="/contact-us"
                            className={({ isActive }) =>
                                `relative inline-block px-1 before:content-[''] before:absolute before:-bottom-1 before:left-0 
       before:h-[2px] before:w-0 before:transition-all before:duration-300 before:bg-purple-500
       ${isActive ? "before:w-full" : "hover:before:w-full"}`
                            }
                        >
                            Contact Us
                        </NavLink>
                    </li>
                    <li className="hidden sm:block relative  px-1">
                        <NavLink
                            to="/cart"
                            className={({ isActive }) =>
                                `relative inline-block px-1 before:content-[''] before:absolute before:-bottom-1 before:left-0 
       before:h-[2px] before:w-0 before:transition-all before:duration-300 before:bg-purple-500
       ${isActive ? "before:w-full" : "hover:before:w-full"}`
                            }
                        >
                            Cart
                        </NavLink>
                    </li>


                </ul>

            </nav>
            <div>

            </div>
           { user ? (
            <div className='flex gap-3'>
            <Button name="Logout" onClick={handleLogout} />
             <Button name="Admin Dashboard" onClick={() => {
                navigate("/admin/dashboard")
             }} />
             </div>
           ) : 
           
           <div className='flex gap-3'>
                <Button name="Login" onClick={() => {
                    navigate("/login")
                }} />
                <Button name="Sign In" onClick={() => {
                    navigate("/sign-up")
                }} />
            </div>

           }
            
        </header>
    )
}

export default UserNavBar
