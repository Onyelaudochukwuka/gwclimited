

const country =
{
    Germany: {
        title: "Study In Germany",
        content: "Germany is highly popular among international students. This is mainly because of the country's many excellent universities offering numerous Bachelor’s and Master’s programmes taught in English, its dynamic student life and good funding options. Germany is home to some of the highest-ranked universities in the world, with almost 400,000 international students in enrolment.",
                        
        Location: "	Central Europe",
        
        image: <img src={require("../pages/img/germanybg.jpeg")} alt="Germany" className="w-full" />,

        Currency: "Euro (€) = N438.40",

        Language: "German",

        EnglishProficiency: "An average 56% of the people of Germany can speak English",

        WorkPermit: "Students studying in Germany can work full or part time ",

        WorkingHours: "20 hrs/week, 40 hrs/week on holidays",

        averageIncome: "€10/hr to €15/hr",

        costOfLiving: " €800/month to €900/month",

        postStudyVisa: "Students from non-EU countries who wish to work in Germany after graduating can extend their residence permit for up to 18 months to find work relating to their studies.Dependant Visa	German Visa for Family Reunification entitles your non-EU/EEA family members to come and stay in Germany, while you’re completing a study course on the basis of a German Residence Permit.",
        AverageTuition: "For Public University its free with only administration charges of around €300 For Private Universities tuition fees could range between €26, 000 to €40, 000",

        applicationRequirements: {
            undergraduateStudy: {
                passport: " International Passport",
                photo: "Passport Size Photographs",
                transcripts: "Secondary school academic report (O-level WAEC/NECO)",
                proofOfEnglishProficiency: " TOEFL or IELTS"
            },
            postGraduateStudy: {
                addition: "(In addition to the requirements for Undergraduate Study)",
                transcripts: "Degree academic report/ Certificate",
                cv: "CV",
                sop: "Statement of Purpose"
            }
        },

        englishProficiencyReq: "Yes. TOEFL or IELTS",
        visaRequirements: {
            pic: "Two biometric visa pictures",
            id: " International Passport",
            cert: "Original School Certificates",
            financeproof: "Proof of Financial means to sustain yourself in Germany",
            health: "Health Insurance Certificate",
            letter: "Acceptance Letter from the University",
            cv: " CV",
            travelIns: "Travel Insurance",
            birthCert: "Birth certificate/Declaration of Age",
            langProf: "Proof of language proficiency",
            motLetter: "Motivational letter",
            delivery: "A prepaid courier envelope by one of the major courier services in Nigeria."
        }
    },
    Cyprus: {
        title: "Study In Cyprus",
        content: "Cyprus provides great opportunity for students to access affordable and high quality education in different fields such as art, social science, business administration, finance, pharmacy, medicine and many more.Cyprus offers much more than an affordable quality academic and learning environment; it also provides you with a wonderful living experience in a stimulating, buzzing and safe environment, with year-round sunshine, captivating natural beauty and a rich historical and cultural landscape.",
                        
        Location: "	Cyprus is an island located in the eastern Mediterranean Sea, south of turkey and south east of main land Greece",

        image: <img src={require("../pages/img/cyprusbg.jpeg")} alt="Cyprus" className="w-full" />,

        Language: "Greek and Turkish",

        EnglishProficiency: "76% of people of Cyprus can speak English",

        WorkPermit: "Full-time students of recognised universities or colleges in Cyprus who can prove that they have been in the country at least 6 months are entitled to work permit. ",

        WorkingHours: "20 hrs/week, 40 hrs/week on holidays",

        averageIncome: "€5/hr",

        costOfLiving: " €500/month to €700/month",

        averageTuition: "between €3000 to €5000 per academic year and up to €7000 for Pharmacy and Medicine",

        applicationRequirements: {
            undergraduateStudy: {
                passport: " International Passport",
                photo: "Passport Size Photographs",
                transcripts: "Secondary school academic report (O-level WAEC/NECO)",
                proofOfEnglishProficiency: " TOEFL or IELTS"
            },
            postGraduateStudy: {
                addition: "(In addition to the requirements for Undergraduate Study)",
                transcripts: "Degree academic report/ Certificate",
                cv: "CV",
                sop: "Statement of Purpose"
            }
        },

        visaRequirements: {
            pic: "Recent passport photograph",
            id: " International Passport",
            cert: "Original School Certificates",
            policeForm: "Police Character Certificate",
            financeproof: "Proof of Financial Status",
            health: "Medical Certificate",
            letter: "Admission Letter ",
            receipt: "Rceipt of Tuition Fees",
            travelIns: "Travel Insurance Certificate",
            houseProf: "Proof of Accomodation",
            flightProof: "Proof of Flight Reservation"
        }
    },
    Poland: {
        title: "Study In Poland",
        content: "Poland is one of the most affordable European countries for studies, a place where you can combine high-quality universities, very affordable tuition fees and a vibrant student and cultural life.Polish cities like Warsaw and Krakow are voted among the top student-friendly cities, offering a lively atmosphere, a great study environment and low cost of living.Poland is a central European country with quite a lot of neighbouring countries such as Lithuania, the Kaliningrad region, Belarus, Ukraine, Slovakia, Czech Republic and Germany, this grants the opportunity for to work and travel in multiple European destinations.",
        
        image: <img src={require("../pages/img/polandbg.jpeg")} alt="Poland" className="w-full" />,

        Location: "	Central Europe",

        Currency: "Zloty (PLN)",

        Language: "Polish",

        EnglishProficiency: "An average 40% of the people of Poland can speak English",

        WorkPermit: "Students studying at a Polish University can work full or part time in Poland",

        WorkingHours: "20 hrs/week, 40 hrs/week on holidays",

        averageIncome: "10 PLN/hr",

        costOfLiving: " 1500 PLN/month to 2000 PLN/month",

        postStudyVisa: "Students with study visa are allowed to stay back and work for 3 months which can be extended.",

        dependancyVisa: "Poland doesn’t offer dependency visa, family member who wish to join their relatives in Poland must apply separately on their own credentials.",
           
        averageTuition: "between €2000 to €4000 per academic year and up to €8000 for Pharmacy and Medicine",
           
        applicationRequirements: {
            undergraduateStudy: {
                passport: " International Passport",
                photo: "Passport Size Photographs",
                transcripts: "Secondary school academic report (O-level WAEC/NECO)",
                proofOfEnglishProficiency: " TOEFL or IELTS"
            },
            postGraduateStudy: {
                addition: "(In addition to the requirements for Undergraduate Study)",
                transcripts: "Degree academic report/ Certificate",
                cv: "CV",
                sop: "Statement of Purpose"
            }
        },

        englishProficiencyReq: "Yes. TOEFL or IELTS",

        visaRequirements: {
            pic: "Recent Passport Photograph",
            id: " International Passport",
            cert: "Original School Certificates",
            financeproof: "Proof of Financial Status",
            health: "Health Insurance Certificate",
            letter: "Acceptance Letter from the University",
            cv: "Short CV",
        }
    },
    Ireland: {
        title: "Study In Ireland",
        content: "Ireland is one of the most popular study abroad destinations in Europe. Its universities offer first-rate education in a traditional, yet modern setting. Thousands of study programs at over two dozen schools attract international students from around the world.Ireland is such a good place to study abroad for a wide number of reasons, including the standard of teaching and education, the career opportunities, and the enjoyable lifestyle..",
                        
        image: <img src={require("../pages/img/irelandbg.jpeg")} alt="Ireland" className="w-full" />,

        Location: "West of Great Britain",

        Currency: "Euro (€) = N438.40",

        Language: "English",

        EnglishProficiency: "An average of 99% of the people of Ireland can speak English",

        WorkPermit: "International students engaged in full-time study of at least one year’s duration do not need a permit to work in Ireland",

        WorkingHours: "20 hrs/week, 40 hrs/week on holidays",

        averageIncome: "€10/hr",

        costOfLiving: "€550/month to €1,000/month",

        postStudyVisa: "Ireland is allowing international students in their second semester of programs delivered by Irish higher education institutions to remain eligible for post-study work rights.",

        dependantVisa:"Non-EU international students studying in Ireland are not allowed to bring their family with them. Spouses and children of international students can apply to live in Ireland separately.",

        averageTuition:"Average tuition fees for both undergraduate and post-graduate studies could range from €9000 to €55,000",

        applicationRequirements: {
            undergraduateStudy: {
                passport: " International Passport",
                photo: "Passport Size Photographs",
                transcripts: "Secondary school academic report (O-level WAEC/NECO)",
                proofOfEnglishProficiency: " TOEFL or IELTS"
            },
            postGraduateStudy: {
                addition: "(In addition to the requirements for Undergraduate Study)",
                transcripts: "Degree academic report/ Certificate",
                cv: "CV",
                sop: "Statement of Purpose"
            }
        },

        englishProficiencyReq: "Yes. TOEFL or IELTS",
        visaRequirements: {
            pic: "Two biometric visa pictures",
            id: " International Passport",
            cert: "Original School Certificates",
            financeproof: "Proof of Financial status",
            health: "Health Insurance Certificate",
            letter: "Acceptance Letter from the University",
            cv: " CV",
            travelIns: "Travel Insurance",
            birthCert: "Birth certificate/Declaration of Age",
            langProf: "Proof of language proficiency",
            motLetter: "Motivational letter",
            delivery: "A prepaid courier envelope by one of the major courier services in Nigeria."
        }
    },
      Russia:{
         title:"Study In Russia",
         content: "Studying in Russia is a popular choice for international students with a wide variety of interests, be they literature, art, history, or Russian language studies. International students in Russia will receive a high quality education in a culturally diverse environment.Russia possesses one of the best mass-education systems in the world, and has a long-standing tradition of high-quality education for all citizens. Russia’s education system produces a 98% literacy rate, exceeding that of most Western European countries.",
                     
         Location: "Eastern Europe",

          image: <img src={require("../pages/img/russiabg.jpeg")} alt="Russia" className="w-full"/>,

         Currency:	"Ruble (RUB) = N7.73",

         Language:	"Russian",

         EnglishProficiency:"An average 5% of the people of Russia can speak English",

         WorkPermit:	"Foreign students don't need a work permit to apply for a job in Russia ",

         WorkingHours:"20 hrs/week, 40 hrs/week on holidays",

         averageIncome: "Between 35,000 RUB to 45,000 RUB a month",

         costOfLiving:" 18,000 RUB/month to 26,000 RUB/month (300 to 400 dollars)",

         dependantVisa:"Spouse or family of international students in Russia can join them on a dependency visa so long as they can prove that they have the capability to support them.",

         averageTuition:"Bachelor’s degree in Russia can cost from RUB 220,000 to 240,000 (USD 3,385 to 3,690) per year. Master’s degree can cost from RUB 240,000 to 260,000 (USD 3,746 to USD 4,058) up to RUB 450,000 (USD 8,082) per year",
         
         postStudyVisa:"Graduates of accredited Russian institutions can stay in the country after studying as temporary residents, valid for only 3 years but can be renewed.",

         applicationRequirements:{
             undergraduateStudy:{
                 passport:" International Passport", 
                 photo:"Passport Size Photographs",
                 transcripts: "Secondary school academic report (O-level WAEC/NECO)",
                 proofOfEnglishProficiency: " TOEFL or IELTS"
             },
             postGraduateStudy:{
                 addition:"(In addition to the requirements for Undergraduate Study)",
                 transcripts: "Degree academic report/ Certificate",
                 cv: "CV",
                 sop:"Statement of Purpose"
             }
     },

         englishProficiencyReq:	"Yes. TOEFL or IELTS",
         visaRequirements: {
                         pic:"Two biometric visa pictures", 
                         id:   " International Passport",
                         cert: "Original School Certificates",
                         financeproof:"Proof of Financial status",
                         health: "Health Insurance Certificate",
                         letter:"Acceptance Letter from the University",
                         cv:" CV",
                         travelIns: "Travel Insurance",
                         birthCert: "Birth certificate/Declaration of Age",
                         langProf: "Proof of language proficiency",
                         motLetter: "Motivational letter",
                         aidCert: "A valid and recent HIV/AIDS certificate",
                         invitation:"An original invitation to enter the territory of the Russian Federation.",
                         policeForm:"Police Character Certificate."
                     }
     },
      'The United Kingdom':{
         title:"Study In The United Kingdom",
         content:".Hundreds of thousands of international students, study in the UK each year, giving the UK a consistently high ranking in popularity. With a diverse population and a reputation for prestigious schooling, the UK is a natural location for international students.The UK is a multicultural country and the second most popular destination for overseas students in the world. A degree from any British university will look great on a CV, and when looking for work in the future, no matter the industry and the location, having a qualification from the UK will be a great selling point.",
                     
         Location: "North-western coast of mainland Europe",
          image: <img src={require("../pages/img/ukbg.jpeg")} alt="United kingdoms" className="w-full" />,

         Currency:	"Pound sterling (GBP) = N 506.85",

         Language:	"English",

         EnglishProficiency:"English is the native language of the United Kingdom",

         WorkPermit:	"Foreign students enrolled on the UK are entitled to work part time ",

         WorkingHours:"20 hrs/week, 40 hrs/week on holidays",

         averageIncome: "An average of £10/hr",

         costOfLiving:"£700/month to £1,100/month",

         postStudyVisa:"International students who have successfully completed an undergraduate or master's degree can apply to stay in the UK for up to two years after their studies",

         dependancyVisa:"Your partner and children ('dependants') may be able to apply to come to the UK or stay longer in the UK, provided that you are a full-time student on a postgraduate level course.",
         
         averageTuition:"Starting from £10,000 and going up to £38,000 or more for medical degrees",
         
         applicationRequirements:{
             undergraduateStudy:{
                 passport:" International Passport", 
                 photo:"Passport Size Photographs",
                 transcripts: "Secondary school academic report (O-level WAEC/NECO)"
             },
             postGraduateStudy:{
                 addition:"(In addition to the requirements for Undergraduate Study)",
                 transcripts: "Degree academic report/ Certificate",
                 cv: "CV",
                 sop:"Statement of Purpose"
             }
     },

         visaRequirements: {
                         pic:"Two biometric visa pictures", 
                         id:   " International Passport",
                         cert: "Original School Certificates",
                         financeproof:"Proof of Financial status",
                         health: "Health Insurance Certificate",
                         letter:"Acceptance Letter from the University",
                         cv:" CV",
                         travelIns: "Travel Insurance",
                         birthCert: "Birth certificate/Declaration of Age",
                         langProf: "Proof of language proficiency",
                         motLetter: "Motivational letter",
                         test:"Tuberculosis test results"
                     }
     },
        
};

export default country;