import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom/index';
import { country } from '../services';
import { Navbar } from '../components';
const Country = () => {
    const { countryId } = useParams();
    // eslint-disable-next-line no-unused-vars
    const [data, setData] = useState(country[countryId])
    const {
    title,
      content,
    image,
    Location,
    Currency,
    Language,
    EnglishProficiency,
    WorkPermit,
    WorkingHours,
    averageIncome,
    costOfLiving,
    postStudyVisa,
    englishProficiencyReq,
    visaRequirements,
    applicationRequirements,
    AverageTuition
    } = data;
    const {
        undergraduateStudy,
        postGraduateStudy
    } = applicationRequirements;
    const {
        passport,
        photo,
        transcripts,
        proofOfEnglishProficiency
    } = undergraduateStudy;
    const {
        addition,
        transcripts : postTranscript,
        cv : postCv,
        sop
    } = postGraduateStudy;
    const {
        pic,
        id,
        cert,
        financeproof,
        health,
        letter,
        cv,
        travelIns,
        birthCert,
        langProf,
        motLetter,
        delivery
    } = visaRequirements;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <>
      <Navbar home/>
      <div className='flex flex-col lg:p-24 p-6 gap-8'>
      {title && <h1 className='font-bold text-lg lg:text-xl text-center'>{title}</h1>}
      {image && <span className="w-3/4 h-auto mx-auto">{image}</span>}
          {content && <p className='font-semibold text-center text-sm lg:text-base w-full'>{content}</p>}
            {Location && <div className="flex gap-6 text-xs lg:text-base"><span className='text-sm lg:text-lg font-semibold'>Location:</span><span>{Location}</span></div>}
            {Currency && <div className="flex gap-6 text-xs lg:text-base"><span className='text-sm lg:text-lg font-semibold'>Currency:</span><span>{Currency}</span></div>}
            {Language && <div className="flex gap-6 text-xs lg:text-lg"><span className='text-sm lg:text-lg font-semibold'>Language:</span><span>{Language}</span></div>}
            {EnglishProficiency  && <div className="flex gap-6 text-xs lg:text-base"><span className='text-sm lg:text-lg font-semibold'>English Proficiency:</span><span>{EnglishProficiency}</span></div>}
            {WorkPermit  && <div className="flex gap-6 text-xs lg:text-base"><span className='text-sm lg:text-lg font-semibold'>Work Permit:</span><span>{WorkPermit}</span></div>}
            {WorkingHours  && <div className="flex gap-6 text-xs lg:text-base"><span className='text-sm lg:text-lg font-semibold'>Working Hours:</span><span>{WorkingHours}</span></div>}
            {averageIncome  && <div className="flex gap-6 text-xs lg:text-base"><span className='text-sm lg:text-lg font-semibold'>Average Income:</span><span>{averageIncome}</span></div>}
            {costOfLiving  && <div className="flex gap-6 text-xs lg:text-base"><span className='text-sm lg:text-lg font-semibold'>Cost of Living:</span><span>{costOfLiving}</span></div>}
            {postStudyVisa  && <div className="flex gap-6 text-xs lg:text-base"><span className='text-sm lg:text-lg font-semibold'>Post Study Visa:</span><span className='w-3/4'>{postStudyVisa}</span></div>}
            {englishProficiencyReq && <div className="flex gap-6 text-xs lg:text-base"><span className='text-sm lg:text-lg font-semibold'>Dependency Visa:</span><span>{englishProficiencyReq}</span></div>}
            {AverageTuition && <div className="flex gap-6 text-xs lg:text-base"><span className='text-sm lg:text-lg font-semibold'>Average Tuitions:</span><span>{AverageTuition}</span></div>}
          <div className='flex w-full gap-10 text-xs lg:text-base'>
        <div className='text-sm lg:text-lg font-semibold'>Application Requirements:</div>
        <div className='w-1/2 text-xs lg:text-base'>
          <span className='text-sm lg:text-lg font-semibold'>Under Graduate Study:</span>
              {passport  && <p>{passport}</p>}
              {photo  && <p>{photo}</p>}
              {transcripts  && <p>{transcripts}</p>}
              {proofOfEnglishProficiency  && <p>{proofOfEnglishProficiency}</p>}
          <span className='text-sm lg:text-lg font-semibold'>Post Graduate Study:</span>
              {addition  && <p>{addition}</p>}
              {postTranscript && <p>{postTranscript}</p>}
              {postCv && <p>{postCv}</p>}
              {sop && <p>{sop}</p>}
   
            </div>
            </div>
          <div className='flex w-full gap-10 text-sm lg:text-lg'>
        <h1 className='text-sm lg:text-lg font-semibold'>Visa Requirements:</h1>
        <div className='w-1/2 text-xs lg:text-base'>
        {pic  && <p>{pic}</p>}
        {id  && <p>{id}</p>}
        {cert && <p>{cert}</p>}
        {financeproof  && <p>{financeproof}</p>}
        {health && <p>{health}</p>}
        {letter && <p>{letter}</p>}
        {cv && <p>{cv}</p>}
        {travelIns && <p>{travelIns}</p>}
        {birthCert && <p>{birthCert}</p>}
        {langProf && <p>{langProf}</p>}
        {motLetter && <p>{motLetter}</p>}
        {delivery && <p>{delivery}</p>}
    </div>
    </div>
      </div>
      </>
  )
}

export default Country;