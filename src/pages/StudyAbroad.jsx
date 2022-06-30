import React from 'react';
import picture from './img/pic3.jpeg';
import { Link } from 'react-router-dom';


const Countries = [
    {
        id:1,
        img: require("./img/uk.jpg"),
        title: "The United Kingdom"
    },  
   {
       id:2,
       img: require("./img/germany.jpeg"),
       title: "Germany"
   },
   {
       id:3,
       img: require("./img/cyprus.jpeg"),
       title: "Cyprus"
   },
    {
        id:4,
        img: require("./img/russia.jpg"),
        title: "Russia"
    },
   {
       id:5,
       img: require("./img/poland.jpg"),
       title: "Poland"
   }, 
      {
       id:6,
       img: require("./img/ireland.jpg"),
       title: "Ireland"
   } 
      
]

const StudyAbroad = () => {
  return (
    <div className='p-10 rounded-lg lg:mx-10 h-auto mb-20'>
        <h2 className='text-[#252F46] font-bold text-xl lg:text-2xl' >Study Abroad</h2>
        <div className="w-20 h-2 bg-[#C2956D] rounded-full div-animate"></div>
        <img src={picture} alt="" className=' h-[30rem] m-auto w-3/5 py-10'/>
        <div>
            <p className='text-xs lg:text-xl py-8 leading-normal'>
                We provide overseas students with higher education opportunities across the 
                world. We share details of suitable courses available at a wide range of quality
                 universities and study institutions. courses designed to match your own needs, sensitive to the requirements of the universities, 
                 the best expert advice on courses, Study destinations including the UK and Europe, Australia, USA and the Cyprus, Poland and Russia.
            </p>
            <p className='text-xs lg:text-xl pb-8 leading-normal'>
            We have established a network of International Student Counsellors to provide an initial point of contact and to advise you at a local level. We currently have counselling services operating in Nigeria and online. Arrange a meeting 
            with your local Student Counsellor at your nearest GWC office to benefit from these services. 
            </p>
        </div>
        <div>
        <h2 className='text-[#252F46] font-bold text-xl lg:text-2xl' >Admission and Visa</h2>
        <div className="w-20 h-2 bg-[#C2956D] rounded-full div-animate"></div>
        <h2  className='text-xs lg:text-xl  pt-4 pb-2 font-semibold leading-normal'>Arrange an appointment with GWC expert staff</h2>
        <p className='text-xs lg:text-xl leading-normal'>Meeting with an experienced GWC counsellor will allow you to discuss your options and choose the right fit for you.</p>
        <h2  className='text-xs lg:text-xl  pt-4 pb-2 font-semibold leading-normal'>Apply for Admission</h2>
        <p className='text-xs lg:text-xl leading-normal'>Once you have decided on your university choice, your counsellor will ask you to provide the necessary documents to apply for admissions.</p>
        <h2  className='text-xs lg:text-xl  pt-4 pb-2 font-semibold leading-normal'>Recieve your Offer Letter</h2>
        <p className='text-xs lg:text-xl  leading-normal'>An offer letter will be issued by the university if you have met the criteria for admissions. GWC will keep in regular contact with you and with your institution of choice.</p>
        <h2  className='text-xs lg:text-xl pt-4 pb-2 font-semibold leading-normal'>Accept your offer</h2>
        <p className='text-xs lg:text-xl leading-normal'>Once you have decided to accept your offer, GWC staff can help you notify the institution and pay any required deposit in both a secure and timely manner.</p>
        <h2  className='text-xs lg:text-xl pt-4 pb-2 font-semibold leading-normal'>Apply for your visa</h2>
        <p className='text-xs lg:text-xl leading-normal'>Our counsellors are trained to give you expert advice on the visa process. They will guide you on preparing your file and check your documents before they are submitted.
        <br/> *In-complete documents will cause delays, and sometimes visa rejections*</p>
        <h2  className='text-xs lg:text-xl pt-4 pb-2 font-semibold leading-normal'>Prepare for your overseas studies</h2>
        <p className='text-xs lg:text-xl leading-normal'>Now your visa's filed you will need to start making preparations for living abroad, including booking accommodation. GWC staff can assist you throughout and will hold pre-departure briefings for students.</p>
        <p className='text-xs lg:text-xl leading-normal pt-2'>As an international student you will need to make sure you successfully apply for a visa before you move abroad to study. Each study destination will have its own requirements and each visa will carry its own rules and restrictions.</p>
        <h2  className='text-xs lg:text-xl pt-4 pb-2 font-semibold leading-normal'>Role of GWC in Visa Guidance</h2>
        <p className='text-xs lg:text-xl leading-normal'>GWC has expert staff in all of our offices to guide you through the whole process, whether you choose to study in the UK, US or the UAE or elsewhere. The process can be complicated and universities often encourage international students to seek professional guidance before and during the visa application stage.</p>
        <h2  className='text-xs lg:text-xl pt-4 pb-2 font-semibold leading-normal'>GWC Visa Guidance Services includes:</h2>
        <ul className='text-xs lg:text-xl pt-2 px-20 flex flex-col gap-4 leading-normal list-disc'>
            <li>Help with collecting your official documents</li>
            <li>Visa interview preparations</li>
            <li>Updates you on any changes in visa regulations</li>
            <li>Guide on all other aspects of the student visa process</li>
            <li>Assist with booking English and medical tests</li>
            <li>In the unfortunate event that your visa application is rejected, GWC will examine the reasons provided  and advise you on how you may be able to appeal Visa Guidance</li>
        </ul>
        <h2  className='text-xs lg:text-xl pt-4 pb-2 font-semibold leading-normal'>Interviews</h2>
        <p className='text-xs lg:text-xl leading-normal'>Many immigration offices will also invite you for an interview. GWC provide full support in preparing you for the interview, advising on the likely format and examples of questions you may be asked.</p>
        <h2  className='text-xs lg:text-xl pt-4 pb-2 font-semibold leading-normal'>Visa restrictions</h2>
        <p className='text-xs lg:text-xl leading-normal'>Highly experienced GWC staff will also be able to advise you on the restrictions of your study visa, for example, whether you can:</p>
        <ul className='text-xs lg:text-xl pt-2 px-20 flex flex-col gap-4 leading-normal list-disc'>
            <li>Work part-time during your course</li>
            <li>Stay for full time employment after your course to work</li>
            <li>Bring your family</li>
        </ul>
        </div>
        <div className="w-full pt-10">
            <div>
                <h2 className='text-center text-[#252F46] font-bold text-xl lg:text-2xl '>Our Countries</h2>
            </div>
            <div className='py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-12'id="country">
                  {Countries.map((country) => {
                      const { img, title } = country;
                      return (
                          <div key={title} data-aos="flip-left" className='w-60 h-40 bg-[#252F46] rounded-lg card2 m-auto'>
                              <Link to={`/country/${title}`}><img className='w-60 h-28 rounded-t-lg' src={img} alt="" />
                                  <h2 className='p-2 text-white text-center font-bold'>{title}</h2>
                              </Link>
                          </div>
                      )})};
            </div>
        </div>
    </div>
  )
}

export default StudyAbroad