"use client";
import React, { useState,useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import {motion, useInView} from "framer-motion";



const projectsData = [
  {
    id: 1,
    title: "BA Team",
    description: "",
    image: "/Images/Image4.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/manny7077/License-database/tree/master",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Amos and his supervisor",
    description: "",
    image: "/Images/Image1.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/manny7077/Django-GridContacts",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "First visit to head office since COVID-19",
    description: "",
    image: "/Images/Image5.jpeg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "With computron training instructor in South Africa",
    description: "",
    image: "/Images/Image10.jpeg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "With finance team in South Africa",
    description: "",
    image: "/Images/Image11.jpeg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "with finance team in South Africa",
    description: "",
    image: "/Images/Image9.jpeg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "SharePoint sensitization",
    description: "",
    image: "/Images/Image12.jpeg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "With subsection of BA Team",
    description: "",
    image: "/Images/Image13.jpeg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "BA Team",
    description: "",
    image: "/Images/Image14.jpeg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 10,
    title: "BA Team",
    description: "",
    image: "/Images/Image15.jpeg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 11,
    title: "At a funeral of a staff relative",
    description: "",
    image: "/Images/Image17.jpeg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 12,
    title: "Traditional day at GRIDCo",
    description: "",
    image: "/Images/Image18.jpeg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },

];


const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const [showMore, setShowMore] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  // Number of initially displayed projects
  const initialProjectsCount = 6;

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section id='projects'>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Gallery
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.slice(0, showMore ? filteredProjects.length : initialProjectsCount).map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
      {!showMore && (
        <div className="text-center mt-8">
          <button
            className="px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-secondary-600"
            onClick={() => setShowMore(true)}
          >
            Load More..
          </button>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;