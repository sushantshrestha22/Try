import React from 'react'
import { useState } from 'react'
import { IoEllipseSharp } from "react-icons/io5";


export default function Herosection() {
   const image = [
    {back:'../image/banner.png',description:'Expand Your Horizon With Us'},
    { back:'../image/pexels-andrea-piacquadio-3772511.jpg',description:'Expand Your Horizon With Us'}
];

    const [a,seta]= useState(0);

    function previous(){
    seta(a===0?image.length-1:a-1)
    }
    function next(){
      seta(a===image.length-1?0:a+1)
    }
  return (


    <div className=' relative'>
       <div className='flex absolute bottom-[5%] left-[50%] gap-[10px]'>
    <div onClick={previous}  ><IoEllipseSharp className='w-[20px] h-[20px] text-white' /></div>
    <div onClick={next} ><IoEllipseSharp className='w-[20px] h-[20px] text-white' /></div>
    </div>
  
   { image.map((im,i)=>{
    return(
        <div key={i} className={`h-[90vh] ${a===i?'block':'hidden'} overflow-hidden`}>
     
        <img src={im.back} alt='' height={500} className='' ></img>
        <p className='absolute top-[30%] left-[50px] font-bold text-white text-6xl w-[40%] '>{im.description}</p>
     
        </div>
        
    )
   })}
    
    </div>
  )
}
