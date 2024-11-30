import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';



const Sidebar = () => {
    const [isOpen , setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }
  return (
    <div className="w-64 h-screen text-white flex flex-col bg-gradient-to-b from-gray-700 via-gray-800 to-black">
        <div className="p-6 text-xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white">DashBoard</div>
        <nav className="flex-1 p-6">
            <ul>
                <li className="mb-6">
                    <Link  to='/profile'className="flex items-center space-x-4 hover:bg-gray-700 p-2 rounded">
                    <FaUser /> <span>Profile</span>
 
                    </Link>
                </li>
                <li className="mb-6">
                    <Link to='/finance-tracker' className="flex items-center space-x-4 hover:bg-gray-700 p-2 rounded">
                    <FaMoneyBill /> <span>Finance</span>
                    </Link>
                </li>
                <li className="mb-6">
                    <Link to='/investments' className="flex items-center space-x-4 hover:bg-gray-700 p-2 rounded">
                    <FaChartLine /><span>Investments</span>
                    </Link>
                </li>
            </ul>
        </nav>
        <div className="p-6">
            <Link to="/logout" className="flex flex-center space-x-4 hover:bg-gray-700 p-2 rounded">
            <FaSignOutAlt /> <span>Logout</span>
            </Link>
        </div>
    </div>
  )
}

export default Sidebar