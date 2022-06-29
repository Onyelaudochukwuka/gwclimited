import React from 'react';
import '../components/Hero.css';
import { Link } from 'react-router-dom'
const data = [
    {
        
        no: '1',
        title: "Appointment",
        content: "Meeting with an experienced GWC counsellor will allow you to discuss your options and choose the right fit for you."
    },
    {
        
        no: '2',
        title: "Application",
        content: "Once you have decided on your university choice, your counsellor will ask you to provide the necessary documents to apply for admissions."
    },
    {
        
        no: '3',
        title: "Acceptance",
        content: "An offer letter will be issued by the university if you have met the criteria for admissions. GWC will keep in regular contact with you and with your institution of choice."
    },
    {
        
        no: '4',
        title: "Visa Application",
        content: "Our counsellors are trained to give you expert advice on the visa process. They will guide you on preparing your file and check your documents before they are submitted."
    }
];
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
const About = () => {
  return (
    <div className='p-10 bg-[#e2e2e2] w-full' id="about">
        <div className='w-full flex flex-col p-6 gap-8'>

            <span className="flex flex-col gap-2 items-center">
                <h2 className="text-center font-bold text-2xl lg:text-3xl uppercase">About Us</h2>
                <div className="w-40 h-2 bg-black rounded-full lg:w-44" data-aos="fade-up"></div>
            </span>
            <div className='lg:text-lg  text-base'>
                <h2 className="font-semibold"><i>WHO WE ARE</i></h2>
                <p className="pt-4 ">Global-watch catalogue ltd (GWC) was established in 2012. We have offices in Lagos, Abuja and port Harcourt, our company has over 10 years experience in providing quality services to our clients where ever they are in the world.</p>

                <p className="pt-4">As a consultancy firm, we recruit only the best professionals to join our growing team of staff. we are dedicated in providing the best services to our esteem clients. our clients come from corporate bodies, public institutions, NGOs and the private sector throughout the world..</p>
            </div>
            <div className='lg:text-lg  text-base'>
                <h2 className="font-semibold"><i>WHO WE DO</i></h2>
                <p className="pt-4 ">We provide services in student recruitment, immigration and visas, multimedia production and training , business development/consultancy services.</p>

                <p className="pt-4">We world round the clock to ensure customer satisfaction in our products and services.</p>
            </div>
            <div className='lg:text-lg  text-base'>
                <h2 className="font-semibold"><i>WHY CHOOSE US</i></h2>
                <p className="pt-4 ">We are creative, innovative, reliable and trusted partner. Our company has been in the industry for more than a decade, this gives us the needed experience to handle complex projects and assignments.</p>
            </div>
        </div>
        <div className=' p-10 pb-20 rounded-lg'>
            <h2 className='text-center text-[#252F46] font-bold text-xl lg:text-2xl mb-4'>Our Four Step Process</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        { data.map(item => {
  const { no,title,content} = item;
  return (
    <div key={item.no} className="w-full px-8 my-4 py-8 rounded-xl text-center  card1">
        <span className='bg-[#e2e2e2] w-10 h-8 rounded-full block m-auto pt-1 mb-4 font-bold'>{no}</span>
        <h2 className=' font-bold pb-2 text-white'>{title}</h2>
        <p className='text-white '>{content}</p>
    </div>
  )   
}
    )}
   
        </div>
        </div>
        <div className="px-6">
        <p>Now your visa's filed you will need to start making preparations for living abroad, including booking accommodation. GWC staff can assist you throughout and will hold pre-departure briefings for students.</p>
            
        <p className="pt-4">As an international student you will need to make sure you successfully apply for a visa before you move abroad to study. Each study destination will have its own requirements and each visa will carry its own rules and restrictions.</p>
        <p className="pt-4">GWC has expert staff in all of our offices to guide you through the whole process, whether you choose to study in the UK, US or the UAE or elsewhere. The process can be complicated and universities often encourage international students to seek professional guidance before and during the visa application stage</p>
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

export default About