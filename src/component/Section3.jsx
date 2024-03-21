import React from 'react'

export default function Section3() {
    const country=[
        {con1:"Australia"},
        {con1:"USA"},
        {con1:"UK"},
        {con1:"New Zealand"},
]
  return (
    <div className='font-sans h-[100vh]  pt-[5%] block relative text-center px-[5%] flex flex-col items-center'>
       <h4 className='font-[650] tracking-wide  text-sky-700 text-[40px] w-[80%] '>Where do you want to study?</h4>
      <p className='mt-[20px] text-xl w-[80%] text-gray-500 font-semibold '>We recommend you the Best college in best destination to build your career.</p>
      <div className='flex gap-[40px] pt-[3%]'>

     { country.map((a,i)=>{
        return(
             <div key={i} className='text-xl font-bold bg-green-500 text-white w-[260px] h-[230px] flex items-center justify-center'>
                <div className='text-center border-2 border-white w-[75%] h-[75%] flex items-center justify-center' >
                 {a.con1} 
                 </div>      
             </div>
            )
    })}
</div>
     <button className='bg-green-500 rounded text-white font-extrabold text-sm py-[15px] px-[30px] mt-[30px]'>More Destinations</button>
    </div>
  )
}
