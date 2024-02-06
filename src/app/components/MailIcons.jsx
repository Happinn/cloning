import Link from 'next/link'
import React from 'react'
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoMdStarOutline } from "react-icons/io";
import { MdLabelImportantOutline } from "react-icons/md";

export default function mailIcons() {
  return (
    <aside className='flex items-center space-x-3'>
      
      <MdCheckBoxOutlineBlank /> 
      <IoMdStarOutline />
      <MdLabelImportantOutline />
     
    </aside>
  )
}
