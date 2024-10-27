import React from 'react'
import { GrHomeRounded } from "react-icons/gr";
import { PiFileTextBold } from "react-icons/pi";
import { HiOutlineFolderRemove } from "react-icons/hi";
import { FaPlus } from "react-icons/fa6";
import { CiSettings, CiUser } from "react-icons/ci";

const Sidebar = () => {
  return (
    <div>
      <div>
        <p>Logo</p>
        <div>
          <GrHomeRounded />
          <GrHomeRounded />
          <PiFileTextBold />
          <HiOutlineFolderRemove />
          <HiOutlineFolderRemove />
        </div>
      </div>
      <div>
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <FaPlus />
      </div>
      <div>
        <CiSettings />
        <CiUser />
      </div>
    </div>
  )
}

export default Sidebar