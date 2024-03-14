import React from 'react'

export default function Navbar() {
    const Nav=[
        {nav1:"Home"},
        {nav1:"Explore"},
        {nav1:"Study Abroad"},
        {nav1:"Preparation class"},
        {nav1:"Gallery"},
        {nav1:"Blog"},
        {nav1:"Resources"},
        {nav1:"Our Profiles"},
    ]
    return (
        <>
      <div className='bg-sky-700 w-full h-[40px]'></div>
<div className='flex w-full h-[100px] font-sans font-semibold items-center justify-between  px-[50px] text-sky-700 border-2'>

<div >
<img src='../image/Grace-Logo.png' height={200} width={200} alt='' ></img> 
</div>
<div className='flex text-center gap-[50px]'>

     { Nav.map((a,i)=>{
        return(
             <div key={i} className='text-md text-center  '>
                 {a.nav1}       
             </div>
            )
    })}
</div>
    </div>
        </>
    )
}
