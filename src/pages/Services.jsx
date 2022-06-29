import React from 'react';
import './Hero.css';

const media = [
  {
    id:7,
    img: require("./img/graphics.jpg"),
    heading: "Graphic Design",
    text:"This involves crafting visual images intended to project information to individuals for a specific purpose.This involves crafting visual images intended to project information to individuals for a specific purpose."
  },
{
    id:8,
    img: require("./img/video.jpg"),
    heading: "Video Editing",
    text:"Video editing is the process of manipulating video by rearranging different shots and scenes in order to create a whole new output."
  },
{
    id:9,
    img: require("./img/3d.jpg"),
    heading: "2D/3D Animation",
    text:"Images in 2D appear flat and span X and Y axis (horizontal and vertical movement. However, 3D animation adds a critical third axis, the z-axis, which creates depth, making the images have a 360-degree appearance."
  },
{
    id:10,
    img: require("./img/motion.jpg"),
    heading: "Motion Graphic",
    text:"Create illusion of motion and rotation with manipulating animation and video footage in your multimedia projects. Combination with audio to create an immersive user experience."
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
    heading: "Digital marketing & SEO",
    text:"In the world of digital marketing, Search Engine Optimization is marketing strategy that plays an important role in helping you increase your reach to potential customers."
  },
{
    id:14,
    img: require("./img/visual.jpg"),
    heading: "Visual Effect (VFX)",
    text:"This refers to imagery created, manipulated, or enhanced for any film, or other moving media that doesn't take place during the initial video shooting."
  },

]

const Services = () => {

  return (
    <div className='p-10  rounded-lg lg:mx-10' id='services'>
       <span className="flex flex-col gap-2 items-center">
                <h2 className="text-center font-bold text-2xl lg:text-3xl uppercase">services</h2>
                <div className="w-40 h-2 bg-black rounded-full lg:w-44" data-aos="fade-up"></div>
            </span>
      <div className='py-8 lg:px-8'>
        <span className="flex flex-col gap-2 ">
          <h2 className='text-[#252F46] font-bold text-xl lg:text-2xl' id='immigrationService'>Immigration Services</h2>
        <div className="w-20 h-2 bg-[#C2956D] rounded-full div-animate"></div>
        </span>
        <p className='text-xs lg:text-xl py-8 leading-normal'>We offer advisory and processing services for those seeking travel to The UK and European countries.
          Our immigration consultants thus have to adhere to very strict professional rules. These rules ensure that we are fit, competent and up to date with all the UK immigration rules and regulations.
          <span className='block py-3'>Our team of consultants has exceptional qualifications and many years of experience in Immigration law. 
          When we submit a visa application to the UK Home Office or any visa application/submission Center, it carries the highest possible chance of success.</span>
          We are available for online consultation, through major social media platforms. Personal consultations are available at any of our offices to individuals and businesses worldwide.
          <span className='block py-3'>Our consultation fees are deductible from your final fee, should you instruct us within three months of your consultation.
Our prices are very competitive. We make sure that you get expert advice at affordable prices.
          We operate a “no-win, no-fee” policy. </span>This means we guarantee our work.
          If your application is not successful, due to an error on our side, we will refund you all the fees you have paid for our professional services.
        </p>
      </div>
      <div>
        <h2 className='text-center font-bold lg:text-2xl text-lg pb-1'>UK/European Visa Categories</h2>    
        <table className='text-xs lg:text-lg table'>
          <tr>
            <th>Visa Type</th>
            <th>Purpose</th>
          </tr>
          <tr>
            <td>Adult Dependant Visa</td>
            <td>Foreign nationals requiring care from a relative who is a UK citizen</td>
          </tr>
          <tr>
            <td>Adult Student Visa</td>
            <td>Persons 18 and above Studying in the UK</td>
          </tr>
          <tr>
            <td>Ancestry Visa</td>
            <td>Citizens of commonwealth countries with a British grandparent</td>
          </tr>
          <tr>
            <td>Business Visitor Visa</td>
            <td>Travel to the UK for up to 6 months for business activities</td>
          </tr>
          <tr>
            <td>Child Dependant Visa</td>
            <td>Child of a British citizen/settled person not living an independent life</td>
          </tr>
          <tr>
            <td>Child Student Visa</td>
            <td>Children age 4-17 to study in the UK</td>
          </tr>
          <tr>
            <td>Fiancés Visa</td>
            <td>Fiancés of British Citizens/settled Persons citizen</td>
          </tr>
          <tr>
            <td>Innovator Visa</td>
            <td>Fiancés of British Citizens/settled Persons</td>
          </tr>
          <tr>
            <td>Intra-Comapany Transfer Visa</td>
            <td>Employees from multi-national companies transferring to work in a UK branch</td>
          </tr>
          <tr>
            <td>Investor Visa</td>
            <td>International investors with at least £2 million to invest in UK businesses</td>
          </tr>
          <tr>
            <td>Ministry of Religion Visa</td>
            <td>Work permit for religious workers</td>
          </tr>
          <tr>
            <td>Paid Permitted Engagement visa</td>
            <td>Short-term entry for individuals invited to the UK as experts in their field</td>
          </tr>
          <tr>
            <td>Schengen Visa</td>
            <td>Skilled Worker Visa</td>
          </tr>
          <tr>
            <td>Skilled Worker Visa</td>
            <td>Skilled Worker Visa</td>
          </tr>
          <tr>
            <td>Sportsperson Visa</td>
            <td>Work permit for elite sportspersons or qualified coaches</td>
          </tr>
        <tr>
            <td>Spouse Visa</td>
            <td>Work permit for elite sportspersons or qualified coaches</td>
          </tr>
        <tr>
            <td>Startup Visa</td>
            <td>Applicants with approved sponsors to start their first business in the UK</td>
          </tr>
        <tr>
            <td>Student Visitor Visa</td>
            <td>Studying in the UK on a temporary basis</td>
          </tr>
        <tr>
            <td>Temporary Worker Visa</td>
            <td>Temporary work, work experience and research in the UK for less than 12 months</td>
          </tr>
        <tr>
            <td>Tourist Visa</td>
            <td>Travel to the UK for up to 6 months for leisure or other purposes</td>
          </tr>
        <tr>
            <td>Two year post-study work Visa</td>
            <td>Work permit for international students who have studied a bachelor’s or master’s course in the UK</td>
          </tr>
        <tr>
             <td>Unmarried Partner Visa</td>
            <td>Long-term partner of British Citizens/settled persons</td>
          </tr>
        <tr>
            <td>Youth MobilityVisa</td>
            <td>2 year work permit for young people aged 18-20 from participating territories</td>
          </tr> 
        </table>
      </div>
      <div className='lg:px-14 pt-12'>
        <span className="flex flex-col gap-2 ">
          <h2 className='text-[#252F46] font-bold text-xl lg:text-2xl' id='multimediaservice'>Multimedia Training & Services</h2>
          <div className="w-20 h-2 bg-[#C2956D] rounded-full div-animate mb-4"></div>
        </span>
    </div>
    <div className=' grid grid-cols-1 lg:grid-cols-4 gap-6 lg:px-10'>
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

export default Services;
