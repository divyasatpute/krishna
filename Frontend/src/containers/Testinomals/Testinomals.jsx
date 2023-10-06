import React from "react";
import "./Testinomals.scss";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { urlFor, client } from "../../client";
import { images } from "../../constants";

const Testinomals = () => {
  const [orgname, SetOrgname] = useState([]);
  const [ testinomals, SetTestinomals] = useState([]);
  const [curentIndex, SetCurrentIndex] = useState(0);
  const handleClick = (index) => {
    SetCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type=="testimonials"]';
    const orgname = '*[_type =="orgname"]';
    client.fetch(query).then((data) => {
      SetTestinomals(data);
    });

    client.fetch(orgname).then((data) => {
      SetOrgname(data);
    });
  }, []);

  return (
    <>
      {testinomals.length && (
        <>
          <div className="test-container">
            <div className="testimonial">
              <div className="testimonial-txt">
                <p className="quotes"> <img src={images.quoteimg}/></p>
                <div className="feedback">
                  <p>{testinomals[curentIndex].feedback}</p>
                </div>
                <div className="testi-description">
                  <div className="img-cont">
                    <img src={urlFor(testinomals[curentIndex].imageurl)} />
                  </div>
                  <div className="descont">
                    <div>{testinomals[curentIndex].name}</div>
                    <div>{testinomals[curentIndex].company}</div>
                  </div>
                </div>
              </div>
              <div className="btn-container">
                <button
                  className="lbtn"
                  onClick={() =>
                    handleClick(
                      curentIndex === 0
                        ? testinomals.length - 1
                        : curentIndex - 1
                    )
                  }
                >
                  <img src={images.leftimg} />
                </button>

                <button 
                  className="lbtn"
                  onClick={() =>
                    handleClick(
                      curentIndex === testinomals.length - 1
                        ? 0
                        : curentIndex + 1
                    )
                  }
                >
                  <img src={images.rightimg} />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Testinomals;
