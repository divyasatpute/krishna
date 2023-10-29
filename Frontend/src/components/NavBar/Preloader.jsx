// import { React,useEffect } from "react-dom";
import ReactDOM from 'react-dom';
import React, { useEffect, useState } from 'react';
import './preloader.css'
import {preLoaderAnim} from "./preanim"
const Preloader = () => {

  function useImperativeDisableScroll({ element, disabled }) {

    useEffect(() => {
        if (!element) {
            return
        }

        element.style.overflowY = disabled ? 'hidden' : 'scroll'

        return () => {
            element.style.overflowY = 'scroll'
        }
    }, [disabled])
}




  useEffect(() => {

    preLoaderAnim()
  }, [])
  
  return (
    <div className="preloader">
      <div className="texts-container">
        <span> Tech Enthusiast</span>
        <span>  Software Developer  </span>
        <span>  Designer  </span>
      </div>

      <div className="box">&nbsp;</div>
      <div className="box">&nbsp;</div>
      <div className="box">&nbsp;</div>
      <div className="box">&nbsp;</div>
      <div className="box">&nbsp;</div>

    </div>
      
  );
};

export default Preloader;
