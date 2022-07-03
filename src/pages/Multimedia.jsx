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
      heading: "2D/3D Animation"
      
    },
  {
      id:10,
      img: require("./img/motion.jpg"),
      heading: "Motion Graphic"     
    },
  {
      id:11,
      img: require("./img/ux.jpg"),
      heading: "UX/UI Design",
      text:" UX design refers to the term “user experience design”, while UI stands for “user interface design”. Both elements are crucial to a product and work closely together."
    },
  {
      id:12,
      img: require("./img/prototype.jpg"),
      heading: "Prototyping",
      text:"Prototyping is defined as the process of developing a working replication of a product or system that has to be engineered. It offers a small-scale facsimile of the end product and is used for obtaining customer feedback."
    },
  {
      id:13,
      img: require("./img/seo.jpg"),
      heading: "Digital marketing & SEO"
     
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
        <span className="flex flex-col gap-2 ">
          <h2 className='text-[#252F46] font-bold text-xl lg:text-2xl' id='multimediaservice'>Multimedia Training & Services</h2>
          <div className="w-20 h-2 bg-[#C2956D] rounded-full div-animate mb-4"></div>
        </span>
    </div>
    <div className='lg:px-14 pb-12'>
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
    <p className='text-xs lg:text-xl px-12 font-semibold pb-4'>We provide training and services in:</p>
         <div className=' pb-20 grid grid-cols-1 lg:grid-cols-4 gap-6 lg:px-10'>
    {media.map((mediaItem,i) => (
       <div key={i} className='w-full rounded-lg bg-black text-white my-4' data-aos={`zoom-${i % 2 === 0 ?  `out` : `in` }`}>
        <img src={mediaItem.img} alt="" className='rounded-t-lg w-full h-60' />
        <h2 className='font-bold text-lg lg:text-xl px-6 py-4'>{mediaItem.heading}</h2>
        <p className='px-6 pb-8 text-sm lg:text-lg'>{mediaItem.text}</p>
    </div>
    )
    )} 
    </div> 
    </div>
  )
}

export default Multimedia