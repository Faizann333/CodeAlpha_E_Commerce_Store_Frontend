import { useContext } from "react"
import {AdminContext} from "../../store/AdminContext"
import OrderCard from "./OrderCard"


const OrderList = () => {
    const {orders} = useContext(AdminContext)
    
  return (
    <div className="p-10">
      
      {orders && orders.map((order, index)=>(
        <OrderCard   key={index} order={order}/>
      ))}
    </div>
  )
}

export default OrderList ;
