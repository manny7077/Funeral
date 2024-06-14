"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const AboutSection = () => {
  const initialAchievements = [
    "♦   He served as the Project Lead for the following:",
      "* the first GRIDCo Paperless Office Project; the first Decongestion and Digitization of GRIDCo Records; the Knowledge Management Portal Migration; the development of the Knowledge Management Portal; and the review and update of IT Policies & Procedures;",
    "♦  He was the Project Secretary for the Enterprise Architecture Project (i.e. Smart Workplace Project) and the MIS Change Management Board;",
    "♦ He served as a member for the following:",
     "* Computron Version 15 (FINMAT/MAGIQ/G2) Upgrade Project; the Corporate Intranet Portal Development Project; the Industrial Online Training Program Project; the Computron Version 12 Migration Project;",
    "♦ He supervised the development of the first Infirmary Management System; the first Suppliers’ Registration Database; an electronic voting system for in-house elections. He contributed to the development and rollout of the new and refreshed corporate website",
    "♦ He provided IT technical assistance to GRIDCo’s 10th Anniversary Committee;",
    "♦ He drafted the initial Paperless Office Policy document;",
    "♦ He led the RFP and Procurement Program Team with the mandate to facilitate procurement processes for key items required for the operations of the MIS section;",
    "♦ He was part of the data team that identified and extracted Finance data from the Computron (FINMAT) Software system for migration into the new ERP (Enterprise Resource Planning) system;",
    "♦ He assisted in the organization and facilitation of numerous Computer Skills; Cyber Security; Data Protection and Privacy and IT related training programmes in all operational areas within the company;",
    "♦ He was the technical person in charge of AutoCAD installation and configuration."
  
  ];

  const [showAll, setShowAll] = useState(false);

  // Slice the achievements array based on whether 'showAll' is true or false
  const displayedAchievements = showAll ? initialAchievements : initialAchievements.slice(0, 5);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <section id="about" className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image src="/Images/Image 7.jpeg" alt="" width={800} height={800} />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-fpl'>
          <h2 className='text-4xl font-bold text-white mb-4'>HIS ACHIEVEMENTS</h2>
          <ul>
            {displayedAchievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
          <div className='text-center mt-8'> {!showAll && (
            <button onClick={toggleShowAll} className="px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-secondary-600 w-auto">Load More...</button>
         
          )}
             </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
