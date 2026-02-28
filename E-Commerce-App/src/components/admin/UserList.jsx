import { useContext } from "react"
import { AdminContext } from "../../store/AdminContext"
import UserCard from "./UserCard"

const UserList = () => {
     const {users}= useContext(AdminContext) 

  return (
    <div className=" flex w-full justify-center gap-3 p-5 min-h-screen flex-wrap">
      {users.map((user)=>(
        <UserCard key={user._id} user = {user}/>
      ))}
    </div>
  )
}

export default UserList
