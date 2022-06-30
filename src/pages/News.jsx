import React from 'react'

const News = () => {
  return (
    <div className='p-10 rounded-lg lg:mx-10 h-auto' >
       <div className='py-8 lg:px-8'>
        <span className="flex flex-col gap-2 ">
          <h2 className='text-[#252F46] font-bold text-xl lg:text-2xl'>Multi-Media </h2>
        <div className="w-20 h-2 bg-[#C2956D] rounded-full div-animate"></div>
        </span>
        <p className='text-xs lg:text-xl py-8 leading-normal'>
            For Our multimedia programs of studies, intending students who are interested in any of our programs should kindly send us an email with their information or kindly visit our centers for registration.
            For new intakes, programs starts at the beginning of every month.
        </p>
            
        </div>
        <div className='py-8 lg:px-8'>
        <span className="flex flex-col gap-2 ">
          <h2 className='text-[#252F46] font-bold text-xl lg:text-2xl'>Study Abroad</h2>
        <div className="w-20 h-2 bg-[#C2956D] rounded-full div-animate"></div>
        </span>
        <p className='text-xs lg:text-xl py-8 leading-normal'>
            Admission are ongoing for september/october and january/february academic seasons, students who are interested in getting an offer should contact us via email or direct phone calls, or visit our offices with relevant documents for admission or visa processing.
        </p>
            
        </div>
    </div>
  )
}

export default News