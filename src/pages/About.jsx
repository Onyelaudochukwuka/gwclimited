import React from 'react';
import '../components/Hero.css';
import colstu from './img/colstu.jpg';
import travel from './img/travel.jpg';
import media from './img/media.jpg';
import consult2 from './img/consultancy.jpg'

const About = () => {
  return (
    <div className='p-10 bg-[#e2e2e2] w-full' id="about">
        <div className='w-full flex flex-col p-6 gap-8'>

            
            <div className='lg:text-lg  text-base'>
                <h2 className="font-semibold"><i>WHO WE ARE</i></h2>
                <p className="pt-4 ">Global-watch catalogue ltd (GWC) was established in 2012. We have offices in Lagos, Abuja and port Harcourt, our company has over 10 years experience in providing quality services to our clients where ever they are in the world.</p>

                <p className="pt-4">As a consultancy firm, we recruit only the best professionals to join our growing team of staff. we are dedicated in providing the best services to our esteem clients. our clients come from corporate bodies, public institutions, NGOs and the private sector throughout the world..</p>
            </div>
            <div className='lg:text-lg  text-base'>
                <h2 className="font-semibold"><i>WHAT WE DO</i></h2>
                <p className="pt-4 ">We provide services in student recruitment, immigration and visas, multimedia production and training , business development/consultancy services.</p>

                <p className="pt-4">We world round the clock to ensure customer satisfaction in our products and services.</p>
            </div>
            <div className='lg:text-lg  text-base'>
                <h2 className="font-semibold"><i>WHY CHOOSE US</i></h2>
                <p className="pt-4 ">We are creative, innovative, reliable and trusted partner. Our company has been in the industry for more than a decade, this gives us the needed experience to handle complex projects and assignments.</p>
            </div>
        </div>
        <div className='bg-[#C2956D] w-full h-40 text-center text-white '>
            <h2 className='py-6 font-bold text-xl px-6 lg:text-2xl'>WE KNOW IT ALL</h2>
            <p className='text-sm lg:text-xl px-6'>WE ARE INNOVATIVE, CREATIVE AND REALIABLE.</p>
        </div>
        <div className='flex flex-col pt-10 lg:flex-row lg:items-baseline gap-6'>
            <div className='px-8'>
                <h2 className='text-[#252F46] font-bold text-xl lg:text-2xl' >Study Abroad</h2>
                <div className="w-20 h-2 bg-[#C2956D] rounded-full div-animate mb-8"></div>
                <img src={colstu} alt="" className='h-auto w-[40%] m-auto' />
                <p className='text-xs lg:text-xl pt-6 leading-normal'>We advise, counsel, process and recruit students to study in top universities and colleges in  America, Europe, Asia and Australia.</p>
                <p className='text-xs lg:text-xl pt-2 leading-normal'>We also ensure the students meet the right documents for admission and visa processing.</p>
            </div>
            <div className=' px-8'>
                <h2 className='text-[#252F46] font-bold text-xl lg:text-2xl' >Immigration Services</h2>
                <div className="w-20 h-2 bg-[#C2956D] rounded-full div-animate mb-8"></div>
                <img src={travel} alt="" className='h-auto w-[40%] m-auto'/>
                <p className='text-xs lg:text-xl pt-6  leading-normal'>GWC is dependable when it comes to visa processing of all types, we specializes in all categories of visas for our clients. </p>
                <p className='text-xs lg:text-xl pt-2 leading-normal'>our team of experts provides exceptional and reliable advise 24/7 </p>
            </div>

        </div>
        
        <div className='flex flex-col pt-10 lg:flex-row lg:items-baseline gap-6 pb-20'>
            <div className='px-8 flex-1'>
                <h2 className='text-[#252F46] font-bold text-xl lg:text-2xl' >Multimedia</h2>
                <div className="w-20 h-2 bg-[#C2956D] rounded-full div-animate mb-8"></div>
                <img src={media} alt="" className='h-auto w-[40%] m-auto' />
                <p className='text-xs lg:text-xl pt-6 leading-normal'>In a world of evolving digital and creative content, GWC ensures that our designs and products in the multi-media department of are company are competitive, innovative and captivating to our audiences. </p>
                
            </div>
            <div className=' px-8 flex-1'>
                <h2 className='text-[#252F46] font-bold text-xl lg:text-2xl' >Consultancy</h2>
                <div className="w-20 h-2 bg-[#C2956D] rounded-full div-animate mb-8"></div>
                <img src={consult2} alt="" className='h-auto w-[40%] m-auto'/>
                <p className='text-xs lg:text-xl pt-6  leading-normal'>Our consultancy department is knowledge driven, we help businesses startup, meetup, develop and identify talents, internationalized products and services, train and develop content, forge strong cross boarder partnerships. </p>
 
            </div>

        </div>
       
    </div>
  )
}

export default About