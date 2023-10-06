import React from "react";
import "./certificate.scss";
import { useState, useEffect } from "react";
import { urlFor, client } from "../../client";
import { images } from "../../constants";

const certificate = () => {
  const [Tech, SetTech] = useState([]);
  useEffect(() => {
    const skillsQuery = '*[_type =="Certificate"]';

    client.fetch(skillsQuery).then((data) => {
      SetTech(data);
    });
  }, []);
  return (
    <>
      <div className="project-page">
        <div className="my-projects-certi">
          <div>
            <h1>
              My <br />
              Certificates
            </h1>
          </div>
          <div></div>
        </div>
        <div className="project-page-container-certi">
          <div className="project-page-items-certi">
            {Tech.map((certificate, index) => (
              <div className="project-page-item-certi" key={index}>
                <a href="/">
                  <div className="project-page-item-header-certi">
                    {/* <h1>{certificate.name}</h1> */}
                    {/* <p>{certificate.PerformanceEvaluationDate}</p> */}
                  </div>
                  <div className="project-page-item-image-certi project-page-item-image1">
                    <img src={urlFor(certificate.imageurl)} />
                  </div>
                  <div className="project-page-item-footer-certi">
                    {/* <p>{certificate.PerformanceEvaluationDate}</p> */}
                    <p>{certificate.name}</p>
                    <img src={images.arrowsvg} alt="" />
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

export default certificate;
