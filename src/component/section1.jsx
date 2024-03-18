import React from 'react'

export default function Section1() {
  return (
    <div>

    <div className='relative flex gap-[5%] mt-[20px] border-1 border-transparent h-[100vh]'>
      <div className='w-[50%] h-[45]'>
        <img src='../image/study-abroad-process-800x640.png' alt='error' className=''></img>
      </div>
      <div className='w-[36%] text-gray-500 mt-[8%]'>
        <h4 className='font-bold text-sky-700 text-3xl'>Welcome to</h4>
        <h2 className='font-bold text-sky-700 text-5xl'>Grace International</h2>
        <p className='font-semibold text-green-500 text-xl mt-[20px]'>A leading educational service provider in Nepal</p>
        <p className='mt-[20px] text-xl'>Established with the aim of delivering quality educational services, Grace International have more than a decade long history of serving students for further studies in Australia, New Zealand, UK, USA and Canada. We also provide preparation classes of IELTS, PTE, GMAT, TOEFL and SAT.</p>
        <button className='bg-green-500 rounded text-white font-extrabold text-sm py-[15px] px-[30px] mt-[30px]'>Learn More</button>
      </div>
    </div>
 
    </div>
  )
}
