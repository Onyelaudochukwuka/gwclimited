import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

 const Hero =() =>{
   return(
     <div className="flex flex-col  w-full justify-between lg:flex-row items-center bg-[url('./img/pic2.jpeg')] bg-[#252F46]/75  bg-no-repeat bg-blend-soft-light bg-cover bg-center h-screen">
       <div className=' text-white  p-20  pb-10 hero-content w-full text-center'>
         <h2 className='text-5xl font-bold w-full block left'>Study Abroad Simplified!</h2>
         <p className='py-6 text-lg font-medium w-full block right'>There is a world out there full of possibilities.
         Our mission is to help you accomplish your dreams.</p>
         <Link to='/'>
          <button className='m-auto flex text-lg font-semibold rounded-full bg-[#C2956D]  py-2 gap-2 px-6  transition-all down'>
            <a href="#country"> View Countries </a>
          <span className="align-middle my-auto w-6 h-6"><svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1 8.00002C1 7.86741 1.05268 7.74024 1.14645 7.64647C1.24021 7.5527 1.36739 7.50002 1.5 7.50002H13.293L10.146 4.35402C10.0521 4.26013 9.99937 4.1328 9.99937 4.00002C9.99937 3.86725 10.0521 3.73991 10.146 3.64602C10.2399 3.55213 10.3672 3.49939 10.5 3.49939C10.6328 3.49939 10.7601 3.55213 10.854 3.64602L14.854 7.64602C14.9006 7.69247 14.9375 7.74764 14.9627 7.80839C14.9879 7.86913 15.0009 7.93425 15.0009 8.00002C15.0009 8.06579 14.9879 8.13091 14.9627 8.19165C14.9375 8.2524 14.9006 8.30758 14.854 8.35402L10.854 12.354C10.7601 12.4479 10.6328 12.5007 10.5 12.5007C10.3672 12.5007 10.2399 12.4479 10.146 12.354C10.0521 12.2601 9.99937 12.1328 9.99937 12C9.99937 11.8672 10.0521 11.7399 10.146 11.646L13.293 8.50002H1.5C1.36739 8.50002 1.24021 8.44734 1.14645 8.35357C1.05268 8.25981 1 8.13263 1 8.00002Z" fill="white"/>
</svg>
</span>
          </button>
         </Link>
       </div>
     </div>
   )
 }

export default Hero;