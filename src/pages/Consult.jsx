import React from 'react'
import consultpic from './img/consult.jpg'

const Consult = () => {
  return (
    <div className='p-10 rounded-lg lg:mx-10 h-auto mb-20'>
        <h2 className='text-[#252F46] font-bold text-xl lg:text-2xl' >Consultancy</h2>
        <div className="w-20 h-2 bg-[#C2956D] rounded-full div-animate"></div>
        <img src={consultpic} alt="" className=' h-auto m-auto w-3/5 py-10'/>
        <div>
            <p className='text-xs lg:text-xl py-8 leading-normal'>At Globalwatch Catalogue we provide expert advice on matters concerning various fields such as travel, business development, 
            human capacity building, education and multimedia application.</p>
            <p className='text-xs lg:text-xl pt-2 leading-normal'>
Our professional guidance has been very beneficial to both individuals and organisations both home and abroad and it is our mandate to always ensure high quality service delivery.</p>
        </div>
    </div>
  )
}

export default Consult