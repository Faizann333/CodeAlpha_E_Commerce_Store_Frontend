import { useContext } from "react"
import {AdminContext} from "../../store/AdminContext"
import OrderList from "../../components/admin/OrderList"


const Orders = () => {
  const {orders} = useContext(AdminContext)

  return (
    <div className=' bg-gray-900 min-h-screen'>
        <OrderList/>
    </div>
  )
}

export default Orders



