import React, { useState } from 'react'
import logo from './../assets/Images/logo.png'
import { HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv } from "react-icons/hi2";
import { HiPlus,HiDotsVertical } from "react-icons/hi";
import HeaderItem from './HeaderItem';
function Header() {
    const [toggle,setToggle]=useState(false);
    const menu=[
        {
            name:'HOME',
            icon:HiHome
        },
        {
            name:'SEARCH',
            icon:HiMagnifyingGlass
        },
        {
            name:'WATCH LIST',
            icon:HiPlus
        },
        {
            name:'ORIGINALS',
            icon:HiStar
        },
        {
            name:'MOVIES',
            icon:HiPlayCircle
        },
        {
            name:'SERIES',
            icon:HiTv
        }
    ]
  return (
    <div className='flex items-center justify-between p-5'>
        <div className='flex  gap-8 items-center'>
        <img src={logo} className='w-[80px] 
        md:w-[115px] object-cover' />
        <div className='hidden md:flex gap-8'>
        {menu.map((item)=>(
            <HeaderItem name={item.name} Icon={item.icon} />
        ))}
        </div>
          <div className='flex md:hidden gap-5'>
        {menu.map((item,index)=>index<3&&(
            <HeaderItem name={''} Icon={item.icon} />
        ))}
         <div className='md:hidden' onClick={()=>setToggle(!toggle)}>       
            <HeaderItem name={''} Icon={HiDotsVertical} />
           {toggle? <div className='absolute mt-3 bg-[#121212] 
            border-[1px] border-gray-700 p-3 px-5 py-4'>
            {menu.map((item,index)=>index>2&&(
            <HeaderItem name={item.name} Icon={item.icon} />
            ))}
            </div>:null}
            </div> 
        </div>
        </div>
       <img src="data:image/jpeg;base64,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"
        className='w-[40px] rounded-full'/>
    </div>
  )
}

export default Header