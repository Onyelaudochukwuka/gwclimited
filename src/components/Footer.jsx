import React from 'react'
import { Link } from 'react-router-dom';
const Footer = () => {
  
  return (
    <div className='bg-[#252F46] text-white flex flex-col items-center p-6 text-center'>
        <div>
          <span className='flex flex-col font-bold text-2xl leading-6 uppercase text-center cursor-pointer'>
              Global 
            <span>
                Watch
            </span>
            <span className='text-xs text-[#C2956D]'>
              Catalogue
            </span>
          </span>              
          <p className='text-center p-10'>
              Making the process of studying abroad easy and smooth.
          </p>
          </div>
        <div className='flex flex-col gap-8  lg:flex-row'>
            <Link to='./'><span> <a href="#contact"> Contact Us</a></span></Link>
            <Link to='./'><span>Terms of Service</span></Link>
      </div>
    
        <div className='flex pt-4 gap-6 w-fit items-center'>
            <span className="w-fit"><a href="https://www.facebook.com/profile.php?id=100080625476250"  target="_blank" rel="noopener noreferrer"><svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 0C18.6277 0 24 5.373 24 12C24 18.6278 18.6277 24 12 24C5.37217 24 0 18.6277 0 12C0 5.373 5.37225 0 12 0Z" fill="#3B5998"/>
<path d="M13.4611 8.26121H15.0076V5.9767H13.1896V5.98494C10.9868 6.06296 10.5354 7.30119 10.4956 8.6017H10.4911V9.74247H8.99109V11.9797H10.4911V17.9767H12.7516V11.9797H14.6033L14.961 9.74247H12.7523V9.05324C12.7523 8.61373 13.0448 8.26121 13.4611 8.26121Z" fill="white"/>
</svg>
</a></span>
            <span className="w-fit"><a href="https://www.instagram.com/gwclimitd/"  target="_blank" rel="noopener noreferrer"><svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.8503 0H7.14973C3.20735 0 0 3.20735 0 7.14973V16.8503C0 20.7926 3.20735 24 7.14973 24H16.8503C20.7926 24 24 20.7926 24 16.8503V7.14973C24 3.20735 20.7926 0 16.8503 0ZM21.5856 16.8503C21.5856 19.4655 19.4655 21.5856 16.8503 21.5856H7.14973C4.5345 21.5856 2.4144 19.4655 2.4144 16.8503V7.14973C2.4144 4.53446 4.5345 2.4144 7.14973 2.4144H16.8503C19.4655 2.4144 21.5856 4.53446 21.5856 7.14973V16.8503Z" fill="url(#paint0_linear_1_7478)"/>
<path d="M12 5.79275C8.57729 5.79275 5.79272 8.57732 5.79272 12C5.79272 15.4226 8.57729 18.2072 12 18.2072C15.4227 18.2072 18.2072 15.4226 18.2072 12C18.2072 8.57727 15.4227 5.79275 12 5.79275ZM12 15.7929C9.90523 15.7929 8.20712 14.0948 8.20712 12C8.20712 9.90525 9.90527 8.20715 12 8.20715C14.0947 8.20715 15.7928 9.90525 15.7928 12C15.7928 14.0947 14.0947 15.7929 12 15.7929Z" fill="url(#paint1_linear_1_7478)"/>
<path d="M18.2192 7.32678C19.0406 7.32678 19.7065 6.66087 19.7065 5.83944C19.7065 5.018 19.0406 4.3521 18.2192 4.3521C17.3977 4.3521 16.7318 5.018 16.7318 5.83944C16.7318 6.66087 17.3977 7.32678 18.2192 7.32678Z" fill="url(#paint2_linear_1_7478)"/>
<defs>
<linearGradient id="paint0_linear_1_7478" x1="12" y1="23.9301" x2="12" y2="0.186403" gradientUnits="userSpaceOnUse">
<stop stop-color="#E09B3D"/>
<stop offset="0.3" stop-color="#C74C4D"/>
<stop offset="0.6" stop-color="#C21975"/>
<stop offset="1" stop-color="#7024C4"/>
</linearGradient>
<linearGradient id="paint1_linear_1_7478" x1="12" y1="23.9301" x2="12" y2="0.186405" gradientUnits="userSpaceOnUse">
<stop stop-color="#E09B3D"/>
<stop offset="0.3" stop-color="#C74C4D"/>
<stop offset="0.6" stop-color="#C21975"/>
<stop offset="1" stop-color="#7024C4"/>
</linearGradient>
<linearGradient id="paint2_linear_1_7478" x1="18.2192" y1="23.9301" x2="18.2192" y2="0.186408" gradientUnits="userSpaceOnUse">
<stop stop-color="#E09B3D"/>
<stop offset="0.3" stop-color="#C74C4D"/>
<stop offset="0.6" stop-color="#C21975"/>
<stop offset="1" stop-color="#7024C4"/>
</linearGradient>
</defs>
</svg></a></span>
            <span className="w-fit"><a href="https://twitter.com/globalwatch"  target="_blank" rel="noopener noreferrer"><svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_7487)">
<path d="M12.0001 23.9998C18.6275 23.9998 24 18.6273 24 11.9999C24 5.37254 18.6275 0 12.0001 0C5.37278 0 0.000244141 5.37254 0.000244141 11.9999C0.000244141 18.6273 5.37278 23.9998 12.0001 23.9998Z" fill="#55ACEE"/>
<path d="M19.3505 8.62398C18.8362 8.85201 18.2831 9.00623 17.7029 9.07511C18.2953 8.72024 18.7498 8.15872 18.9644 7.48855C18.4101 7.81733 17.796 8.05584 17.1429 8.18439C16.6197 7.62716 15.8742 7.27892 15.0487 7.27892C13.465 7.27892 12.1804 8.56344 12.1804 10.1472C12.1804 10.372 12.2059 10.5909 12.2551 10.8009C9.87127 10.6814 7.75763 9.53951 6.34283 7.80364C6.09597 8.22718 5.95437 8.72024 5.95437 9.24581C5.95437 10.2407 6.46112 11.119 7.23034 11.6333C6.76038 11.6185 6.3178 11.4895 5.93126 11.2741C5.93105 11.2863 5.93105 11.2985 5.93105 11.3105C5.93105 12.7002 6.92017 13.8594 8.23208 14.1227C7.99164 14.1886 7.73773 14.2235 7.47655 14.2235C7.2913 14.2235 7.11183 14.2057 6.93685 14.1724C7.30178 15.3116 8.36085 16.141 9.61629 16.1643C8.63444 16.9337 7.39783 17.3921 6.05362 17.3921C5.8226 17.3921 5.59371 17.3787 5.36975 17.3519C6.63845 18.1661 8.14651 18.6407 9.76624 18.6407C15.0421 18.6407 17.9273 14.2701 17.9273 10.4794C17.9273 10.3551 17.9245 10.2313 17.919 10.1085C18.4799 9.70422 18.9661 9.19918 19.3505 8.62398Z" fill="#F1F2F2"/>
</g>
<defs>
<clipPath id="clip0_1_7487">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
        </svg></a></span>
        </div>
        <div className='text-sm pt-20 text-center'>
          <p className='text-center'>&copy; Messiovo & Udoka</p>
        </div>
    </div>
  )
}

export default Footer;