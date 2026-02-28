import React from "react";
import moment from "moment"; // for nice date formatting
import Button from "../Button";

const UserCard = ({ user }) => {
  return (
    <div className="flex flex-row bg-gray-800 border-purple-700 border-3 shadow-md rounded-xl p-6 hover:shadow-lg transition h-[100px] w-full">
      
      {/* User Info */}
      <div className="flex justify-between items-center w-full gap-2">
       
        <div className="w-[250px]"><p className="font-bold text-gray-300 text-lg  ">{user.name}</p></div>
        <div className="w-[250px]"><p className="text-gray-200 text-sm">{user.email}</p></div>
        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
            user.role === "admin" ? "bg-red-100 text-red-600" : "bg-green-400 text-black"
          }`}
        >
          {user.role.toUpperCase()}
        </span>
        <p className="text-gray-200 text-xs mt-2">
          Joined: {moment(user.createdAt).format("MMMM Do YYYY, h:mm a")}
        </p>
        <Button name="Delete" className= "bg-red-500 text-black"/>
      </div>
    </div>
  );
};

export default UserCard;