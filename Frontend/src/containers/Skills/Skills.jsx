 import React from "react";
import "./Skills.scss";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
// import { delay, motion } from "framer-motion";
// import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { urlFor, client } from "../../client";
import { images } from "../../constants";
// import ReactTooltip from 'react-tooltip';

const Skills = () => {
  const [Exp, SetExperience] = useState([]);
  const [Tech, SetTech] = useState([]);

  useEffect(() => {
    const query = '*[_type=="experience"]';
    const skillsQuery = '*[_type =="technologies"]';

    client.fetch(query).then((data) => {
      SetExperience(data);
    });

    client.fetch(skillsQuery).then((data) => {
      SetTech(data);
    });
  }, []);
  return (
    <>
      <div className="skills-container">
        {Tech.map((tech, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1}}
            transition={{ duration: 0.5, type: "tween" }}
            className="container"
            key={index}
          >
            <div className="skill-card">
              <header className="skill-card_header html">
                <img
                  className="skill-card_icon"
                  src={urlFor(tech.icon)}
                  alt="HTML5 Logo"
                />
              </header>
              <section className="skill-card_body">
                <h2 className="skill-card_title">{tech.skills}</h2>
                <span className="skill-card_duration">{tech.exp}</span>
                <ul className="skill-card_knowledge ">
                  <li>{tech.tag1}</li>
                  <li>{tech.tag2}</li>
                  <li>{tech.tag3}</li>
                  <li>{tech.tag4}</li>
                  <li>{tech.tag5}</li>
                </ul>
              </section>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Skills;
