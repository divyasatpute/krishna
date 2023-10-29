import React from "react";
import "./Work.scss";
import { useState, useEffect } from "react";
import { delay, motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { urlFor, client } from "../../client";
import { images } from "../../constants";
// import ContactForm from "../Footer/Footer";
import { About, Education, Footer, Testinomals, Work } from "../../containers";

const Works = () => {
  const [activeFilter, setactiveFilter] = useState("All");
  const [animation, setAnimate] = useState({ y: 0, opacity: 1 });
  const [works, setworks] = useState([]);
  const [filterwork, setFilterWork] = useState([]);
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type=="project"]';
    client.fetch(query).then((data) => {
      setworks(data);
      setFilterWork(data);
    });
  }, []);
  const workfilter = (item) => {
    setactiveFilter(item);
    setAnimate([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimate([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((works) => works.tags.includes(item)));
      }
    });
  };

  return (
    <>
      <div className="project-page">
        <div className="my-projects">
          <div>
            <h1>
              My <br />
              Projects
            </h1>
          </div>
          <div>
            <div className="projectwork-filter">
              {["All","UI/UX","Mobile-App","Web-App"].map(
                (item, index) => (
                  <div
                    key={index}
                    onClick={() => workfilter(item)}
                    className={`projectwork-filter-item ${
                      activeFilter === item ? "item-click" : " "
                    }`}
                  >
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        <div className="project-page-container">
          <div className="project-page-items">
            {filterwork.map((project, index) => (
              <div className="project-page-item" key={index}>
                <div className="project-page-item-number"></div>
                <a href={project.projectlink} target="_blank">
                  <div className="project-page-item-header">
                    <h1>{project.title}</h1>
                    <div>
                      <p>{project.tags[0]}</p>
                    </div>
                  </div>
                  
                  <div className="project-page-item-image project-page-item-image1">
                    <img src={urlFor(project.imgUrl)} />
                    
                  </div>
                  <div className="project-page-item-footer-git">
                    <p>{project.description}</p>
                    <a href={project.codelink}>
                      <img src={images.github} alt="" />
                    </a>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
