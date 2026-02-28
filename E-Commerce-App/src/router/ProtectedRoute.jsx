import { useContext } from "react"
import { AuthContext } from "../store/AuthContext"
import { Navigate } from "react-router-dom";
import Loader from "../components/loader/Loader";


const ProtectedRoute = ({children}) => {
    const {user} = useContext(AuthContext);
   
      if (user === null) {
        return <Loader />;
      }
     if (!user) {
          return <Navigate to="/login" replace />;
    }
  return  children;
  
}

export default ProtectedRoute;
