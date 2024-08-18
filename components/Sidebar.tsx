"use server"
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
const Sidebar = ({activeTab}:{
  activeTab:string
})=> {
  console.log(activeTab);
  return (
    <div className="w-full  mt-12">
      <div className=" flex items-center justify-center h-16 w-full bg-gray-200 rounded-xl gap-2">
        <FaUserCircle className="text-3xl" />
        <h4 className="font-medium">Jaydon Frankie</h4>
      </div>
      <div className=" mt-8">
        <Link href="/?tab=shipments" className={`pl-8 h-12 flex items-center rounded-lg  ${activeTab==='shipments'&&"bg-[#e9f0f9] text-[#3d79ea] font-semibold"}`}>
          <h2>Shipments</h2>
        </Link>
        <Link href="/?tab=address" className={`pl-8 h-12 flex items-center rounded-lg ${activeTab==='address'&&"bg-[#e9f0f9] text-[#3d79ea] font-semibold"}`}>
          <h2>Addresses</h2>
        </Link>

        
          <Link href="/?tab=incoming" className={`pl-8 h-12 flex items-center rounded-lg ${activeTab==='incoming'&&"bg-[#e9f0f9] text-[#3d79ea] font-semibold"}`}>
          <h2>Incoming</h2>
          </Link>

        
          <Link href="/?tab=claim" className={`pl-8 h-12 flex items-center rounded-lg ${activeTab==='claim'&&"bg-[#e9f0f9] text-[#3d79ea] font-semibold"}`}>
          <h2>Claim your Package</h2>
          </Link>

          <Link href="/?tab=requests" className={`pl-8 h-12 flex items-center rounded-lg ${activeTab==='requests'&&"bg-[#e9f0f9] text-[#3d79ea] font-semibold"}`}>
          <h2>Requests</h2>
          </Link>


          <Link href="/?tab=update_password" className={`pl-8 h-12 flex items-center rounded-lg ${activeTab==='update_password'&&"bg-[#e9f0f9] text-[#3d79ea] font-semibold"}`}>
          <h2>Update Password</h2>
          </Link>


          <Link href="/?tab=logout" className={`pl-8 h-12 flex items-center rounded-lg ${activeTab==='logout'&&"bg-[#e9f0f9] text-[#3d79ea] font-semibold"}`}>
          <h2>Logout</h2>
          </Link>

      </div>
    </div>
  );
};

export default Sidebar;
