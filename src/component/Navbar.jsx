import React from 'react'

export default function Navbar() {
    const Nav=[
        {nav1:"Home"},
        {nav1:"Explore"},
        {nav1:"Study Abroad"},
        {nav1:"Preparation Classes"},
        {nav1:"Gallery"},
        {nav1:"Blog"}, 
        {nav1:"Resources"},
        {nav1:"Our Profiles"},
    ]
    return (
        <>
      <div className='bg-sky-700 w-full h-[40px]'></div>
<div className='flex w-full h-[85px] font-sans  items-center justify-between  px-[40px] text-sky-700 border-b-2 sticky top-0 z-10 bg-white '>

<div >
<img src='../image/Grace-Logo.png' height={180} width={180} alt='' ></img> 
</div>
<div className='flex text-center items-center gap-[40px] box-border'>

     { Nav.map((a,i)=>{
        return(
             <div key={i} className='h-[85px] flex items-center text-md text-center font-semibold hover:border-b-4 hover:border-green-500'>
                 {a.nav1}       
             </div>
            )
    })}
</div>
    </div>
        </>
    )
}
