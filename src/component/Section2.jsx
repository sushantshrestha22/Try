import React from 'react'
import { FaTrophy } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";

export default function Section2() {
  return (
    <div className='h-[90vh] text-center px-[5%] bg-gray-100 relative flex flex-col items-center pt-[5%] block'>
      <h4 className='font-bold flex text-sky-700 text-3xl w-[80%] block tracking-wide  '>One of the leading educational consultancy in Nepal guiding students to meet their dreams</h4>
      <p className='mt-[20px] text-md w-[80%] text-gray-500'>Proper abroad study guidance provided for academic growth. The best test preparation classes in the whole town. Definite information about highly renowned colleges/universities throughout the globe. Guidance for getting wide range of scholarship/fellowship. Service oriented staffs to provide information all the time. Located at heart of main cities of the country.</p>
      
      <div className='flex gap-[20%] justify-between w-[70%] pt-[5%]' >
      <div className='flex flex-col items-center gap-[40px] '>

      <FaUser className='w-[40px] h-[40px] text-gray-700'/>
      <h6 className='text-6xl font-extrabold text-gray-700'>26K+</h6>
      <h1 className='text-xl font-semibold text-gray-700 uppercase'>students</h1>
      </div>
      <div className='flex flex-col items-center gap-[40px] '>
     <FaUniversity className='w-[40px] h-[40px] text-gray-700'/>

      <h6 className='text-6xl font-extrabold text-gray-700'>500+</h6>
      <h1 className='text-xl font-semibold text-gray-700 uppercase'>EDUCATION PARTNERS</h1>
      </div>
      <div className='flex flex-col items-center gap-[40px]'>

      <FaTrophy className='w-[40px] h-[40px] text-gray-700' />
      <h6 className='text-6xl font-extrabold text-gray-700'>17</h6>
      <h1 className='text-xl font-semibold text-gray-700 uppercase'>years</h1>
      </div>

      </div>
    </div>
  )
}
