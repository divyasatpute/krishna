import React, { useState } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { urlFor,client } from "../../client";
import { useEffect } from "react";
const About = () => {
  const [abouts,setAbouts]=useState([]);
  useEffect(() => {
    const query='*[_type == "abouts"]'
    client.fetch(query).then((data)=>setAbouts(data))
  }, [])
  return (
    <>
      <div className="app__profile">
        {abouts.map((about,index)=>(
          <motion.div
            whileInView={{opacity:1}}
            whileHover={{scale:1.1}}
            transition={{duration :0.5,type:'tween'}}
            className="app__profile-item"
            key={about.title+index}
          > 
            <img src={urlFor(about.imageUrl)} alt={about.title} />
            <h3 className="bold-text" style={{marginTop:20}}>{about.title}</h3> 
            <p className="bold-text-p" style={{marginTop:20}}>{about.description}</p>
          </motion.div>
        ))}
      </div >
    </>
  );
};

export default About;

