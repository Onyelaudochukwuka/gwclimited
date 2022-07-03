import React from 'react'


const media = [
    {
      id:7,
      img: require("./img/graphics.jpg"),
      heading: "Graphic Design"
      
    },
  {
      id:8,
      img: require("./img/video.jpg"),
      heading: "Video Editing"
     
    },
  {
      id:9,
      img: require("./img/3d.jpg"),
      heading: "2D/3D Character Animation"
      
    },
  {
      id:10,
      img: require("./img/motion.jpg"),
      heading: "Motion Graphic"     
    },
  {
      id:11,
      img: require("./img/ux.jpg"),
      heading: "UX/UI Design"
     
    },
  {
      id:12,
      img: require("./img/prototype.jpg"),
      heading: "Prototyping"
     
    },
  {
      id:13,
      img: require("./img/seo.jpg"),
      heading: "Digital marketing / SEO"
     
    },
  {
      id:14,
      img: require("./img/visual.jpg"),
      heading: "Visual Effect (VFX)"
     
    },
  
  ]

const Multimedia = () => {
  return (
    <div>
        <div className='lg:px-14 pt-12'>
        <span className="flex flex-col gap-2 mx-10 ">
          <h2 className='text-[#252F46] font-bold text-xl lg:text-2xl' id='multimediaservice'>Multimedia Training & Services</h2>
          <div className="w-20 h-2 bg-[#C2956D] rounded-full div-animate mb-4"></div>
        </span>
    </div>
    <div className='lg:px-14 pb-12 mx-10'>
        <p className='text-xs lg:text-xl'>We provide you with all your multimedia needs and we are always working to keep pace with developments and updates in the world in order to make your business a world leader

Since opening our doors 2012, GWC has grown into a full-service</p>

        <ul className='text-xs lg:text-xl py-8 flex flex-col gap-4 leading-normal list-disc px-20'>
            <li>
            marketing agency focused on creating integrated strategies, intuitive technology.
            </li>
            <li>
            we produce designs that gives meaningful results
            </li>
            <li>
            train and develop talents who are creative and innovative.
            </li>
        </ul>
        <p className='text-xs lg:text-xl '> we have been meeting the needs of every individual and organization we serve while growing as a strong, creative and strategic partner.</p>
    </div>
    <h2 className='text-[#252F46] font-bold text-xl lg:text-2xl px-16 pb-6' data-aos="fade-left" ><i>We Provide Training and Services In:</i></h2>
         <div className=' pb-10 grid grid-cols-1 px-10 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:px-16'>
    {media.map((mediaItem,i) => (
       <div key={i} className='w-full rounded-lg bg-black text-white my-4' data-aos={`zoom-${i % 2 === 0 ?  `out` : `in` }`}>
        <img src={mediaItem.img} alt="" className='rounded-t-lg w-full h-60' />
        <h2 className='font-bold text-lg lg:text-xl px-6 py-4'>{mediaItem.heading}</h2>
    </div>
    )
    )} 

    </div> 
    <div className='lg:px-14 mx-10'>
        <span className="flex flex-col gap-2 ">
          <h2 className='text-[#252F46] font-bold text-xl lg:text-2xl' data-aos="fade-down" >Graphic Design</h2>
        <div className="w-20 h-2 bg-[#C2956D] rounded-full div-animate"></div>
        </span>
        <p className='text-xs lg:text-lg pt-4 leading-normal'>Graphic design is <b> a craft where professionals create visual content to communicate messages. </b>By applying visual hierarchy and page layout techniques, designers use typography and pictures to meet users' specific needs and focus on the logic of displaying elements in interactive designs, to optimize the user experience.</p>
    </div>
    <div className='lg:px-14 mx-10 pt-6'>
        <span className="flex flex-col gap-2 ">
          <h2 className='text-[#252F46] font-bold text-xl lg:text-2xl' data-aos="fade-down" >Video Editing</h2>
        <div className="w-20 h-2 bg-[#C2956D] rounded-full div-animate"></div>
        </span>
        <p className='text-xs lg:text-lg pt-4 leading-normal'>Video editing is the manipulation and arrangement of video shots. Video editing is used to structure and present all video information, including films and television shows, video advertisements and video essays </p>
    </div>
    <div className='lg:px-14 mx-10 pt-6'>
        <span className="flex flex-col gap-2 ">
          <h2 className='text-[#252F46] font-bold text-xl lg:text-2xl' data-aos="fade-down" >2D/3D Character Animation </h2>
        <div className="w-20 h-2 bg-[#C2956D] rounded-full div-animate"></div>
        </span>
        <p className='text-xs lg:text-lg pt-4 leading-normal'> <b>Animation</b> is a method in which figures are manipulated to appear as moving images. In traditional animation, images are drawn or painted by hand on transparent celluloid sheets to be photographed and exhibited on film. Today, most animations are made with computer-generated imagery (CGI). Computer animation can be very detailed 3D animation, while 2D computer animation (which may have the look of traditional animation) can be used for stylistic reasons, low bandwidth, or faster real-time renderings. Other common animation methods apply a stop motion technique
         to two- and three-dimensional objects like paper cutouts, puppets, or clay figures </p>
    </div>
    <div className='lg:px-14 mx-10 pt-6'>
        <span className="flex flex-col gap-2 ">
          <h2 className='text-[#252F46] font-bold text-xl lg:text-2xl' data-aos="fade-down" >Motion Graphics</h2>
        <div className="w-20 h-2 bg-[#C2956D] rounded-full div-animate"></div>
        </span>
        <p className='text-xs lg:text-lg pt-4 leading-normal'><b>Motion graphic design,</b>  also known as <b>motion design,</b>  is a subset of graphic design in that it uses graphic design principles in a filmmaking or video production context (or other temporally evolving visual media) through the use of animation or filmic techniques. Examples include the kinetic typography and graphics used in film and television opening sequences, and station identification logos of some television channels.</p>
        <p className='text-xs lg:text-lg pt-2 leading-normal'>A motion graphic designer may be a person trained in traditional graphic design who has learned to integrate temporally evolving visual media into their existing design knowledge, though motion designers may also come from a filmmaking or animation background as these fields share a number of overlapping skills</p>
    </div>
    <div className='lg:px-14 mx-10 pt-6'>
        <span className="flex flex-col gap-2 ">
          <h2 className='text-[#252F46] font-bold text-xl lg:text-2xl' data-aos="fade-down" >UX/UI Design</h2>
        <div className="w-20 h-2 bg-[#C2956D] rounded-full div-animate"></div>
        </span>
        <p className='text-xs lg:text-lg pt-4 leading-normal'>User interface design or user interface engineering is the design of user interfaces for machines and software, such as computers, home appliances, mobile devices, and other electronic devices, with the focus on maximizing usability and the user experience.</p>
    </div>
    <div className='lg:px-14 mx-10 pt-6'>
        <span className="flex flex-col gap-2 ">
          <h2 className='text-[#252F46] font-bold text-xl lg:text-2xl' data-aos="fade-down" >Prototyping</h2>
        <div className="w-20 h-2 bg-[#C2956D] rounded-full div-animate"></div>
        </span>
        <p className='text-xs lg:text-lg pt-4 leading-normal'>Prototyping is a process in which design teams ideate, experiment with, and bring concepts to life, ranging from paper ideas to digital designs. At its core, a prototype is an early sample of a design that allows users to visualize or interact with it before a final product is developed. It is the fourth step of the design thinking process, followed by usability testing.</p>
    </div>
    <div className='lg:px-14 mx-10 pt-6'>
        <span className="flex flex-col gap-2 ">
          <h2 className='text-[#252F46] font-bold text-xl lg:text-2xl' data-aos="fade-down" >Digital Marketing / SEO</h2>
        <div className="w-20 h-2 bg-[#C2956D] rounded-full div-animate"></div>
        </span>
        <p className='text-xs lg:text-lg pt-4 leading-normal'>Digital marketing is the component of marketing that uses the Internet and online based digital technologies such as desktop computers, mobile phones and other digital media and platforms to promote products and services </p>
        <p className='text-xs lg:text-lg pt-2 leading-normal'>Advertisements. SEO stands for<b> Search Engine Optimization.</b> It is the process of getting traffic from the free, organic, editorial, or natural search results on the search engines. Simply put, it's the name given to the activity that attempts to improve search engine rankings </p>
    </div>

    <div className='lg:px-14 mx-10 pt-6 pb-14'>
        <span className="flex flex-col gap-2 ">
          <h2 className='text-[#252F46] font-bold text-xl lg:text-2xl' data-aos="fade-left" ><i>WHAT WE CAN DO FOR YOU </i></h2>
        </span>
        <p className='text-xs lg:text-lg pt-4 leading-normal'>We are here to plan and place broadcast and cable television, radio, print, digital, and outdoor advertising for your campaign. The basis for all successful media campaigns are plans that are properly targeted to your audience demographically, geographically, quantitatively and qualitatively. We can utilize national, regional, and market specific demographic research
         and ratings to ensure each campaign will efficiently achieve maximum reach and frequency. </p>
        <p className='text-xs lg:text-lg pt-4 leading-normal'><b>For our students, our classes are fully air-conditioned and equip with state of the art facilities to make learning easy.</b></p>
        <p className='text-xs lg:text-lg pt-4 leading-normal'><b>our tutors are experts in the industry with years of experience, they have mastered the art of producing quality work for clients and passing knowledge to students. </b></p>
        <p className='text-xs lg:text-lg pt-4 leading-normal'><b>We also develop mentorship and apprenticeship programs for students who intend to startup, freelance or work in the creative industry. </b></p>
        <p className='text-xs lg:text-lg pt-4 leading-normal'><b>Please contact us today to book at place to study one of our programs in any of our centres, or hire us to handle your advertising, creative and design projects. </b></p>
    </div>
    </div>
  )
}

export default Multimedia