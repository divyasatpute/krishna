import React, { useState, useEffect } from "react";
import "./Home.scss";
import { images } from "../../constants";
import { About, Education, Footer, Testinomals, Work } from "../../containers";
import { Skills } from "../../containers";
import { Link, NavLink } from "react-router-dom";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__container1">
          <div className="txt-line downdown" id="Krishna">
            <p>Krishna</p>
          </div>
          <div className="txt-line line-bottom" id="Kushwaha">
            <p>
              Kus<span>h</span>waha
            </p>
          </div>
        </div>
        <div></div>
      </div>

      <div className="left-side-quotes">
        <p>
          I'm really good at making websites that look great and work well.I
          blend art, branding,creativity, and technical skills to create
          websites that people love to use. I have a track record of coming up
          with new and exciting online experiences that not only grab attention
          but also help businesses stand out and leave a positive impression.
        </p>
      </div>
      <div className="home__container">
        <div className="home__container1 newleft">
          <div className="txt-line" id="digital">
            <p>Dev</p>
          </div>
          <div className="txt-line line-bottom" id="design">
            <p>Design</p>
          </div>
          
        </div>
      </div>
      <div className="coffee">
        <img src={images.myphtot} />
      </div>
      <div className="short-about">
        <div className="main-h1-short-about">
          <h1 className="main-short-about">About Me</h1>
        </div>
        <div className="both-about-line">
          <span className="sub-main-short-about">
            <About />
          </span>
          <p
            className="sub-main-short-about"
            style={{
              fontSize: "30px",
              textTransform: "capitalize",
              fontFamily: "Montserrat,sans-serif",
            }}
          >
            {/* I always try to find the optimal solution to the client */}
          </p>
        </div>
        {/* <div className="another-svg ">
          <img src={images.coffeetwo} />
        </div> */}
      </div>
      <div className="my-skills-main-reel">
        <div className="main-h1-short-about">
          <h1 className="main-short-about">SKILLS</h1>
        </div>
        <Skills />

        <div>
          <div className="main-h1-short-about">
            <h1 className="main-short-about" id="education-txt">Education</h1>
          </div>
        </div>
        <div>
          <Education />
        </div>

        <div className="allig">
          <svg className="svg-skills" viewBox="0 0 1320 300">
            <text className="uniquetext"  x="50%" y="50%" dy=".35em" textAnchor="middle">
              <Link to={"/certificate"}>Certificates</Link>
            </text>
          </svg>
        </div>
        <div className="allig">
          <svg className="svg-skills" viewBox="0 0 1320 300">
            <text  className="uniquetext" x="50%" y="50%" dy=".35em" textAnchor="middle">
              <Link to={"/work"}>Projects</Link>
            </text>
          </svg>
        </div>
        <div className="contmerger">
          <div>
            <div className="main-h1-short-about">
              <h1 className="main-short-about" id="testitxt">Testimonials</h1>
            </div>
          </div>
          <div>
            <Testinomals />
          </div>
        </div>
        <div className="edumerger">
          <div>
            <div className="main-h1-short-about">
              <h1 className="main-short-about" id="getintrouch-txt">Get in Touch</h1>
            </div>
          </div>
        </div>
        <div className="contactmerger">
          <div>
            <Footer /> 
          </div>
        </div>

        <footer class="footer-distributed">
          <div class="footer-left">
            <h3>
              KRISHNA<span>KUSHWAHA</span>
            </h3>

            <p class="footer-links">
              <a href="#" class="link-1" onClick={()=>{window.location.reload(false)}}>
                Home
              </a>
              <a>
              <NavLink to="/footer">Contact</NavLink>
              </a>
            </p>

            <p class="footer-company-name">2023 © Edition</p>
          </div>

          <div class="footer-center">
            <div>
              <i class="fa fa-map-marker"></i>
              <p>
                <span>MUMBAI,MAHARASHTRA</span>
              </p>
            </div>

            <div>
              <i class="fa fa-phone"></i>
              <p>9922379106</p>
            </div>

            <div className="effectlink">
              <i class="fa fa-envelope"></i>
              <p>
                <a href="mailto:krishna.kushwaha2312@gmail.com" >
                  krishna.kushwaha2312@gmail.com
                </a>
              </p>
            </div>

          </div>

          <div class="footer-right">
            <p class="footer-company-about">
              <span>Social Accounts</span>
            </p>

            <div class="footer-icons">
            <a href="https://github.com/KKrishna11">
                <i class="fa fa-github"></i>
                <img src={images.github} />
              </a>
              
              <a href="https://instagram.com/krishna.k11?igshid=MzNlNGNkZWQ4Mg==">
                <img src={images.instagramlogo} />
              </a>
              <a href="https://www.linkedin.com/in/krishna-kushwaha-a0092922b/">
                <img src={images.linkedin}  />
              </a>
              <a href="#">
                <i class="fa fa-facebook"></i>
                <img src={images.facebooklogo} />
              </a>
              
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;
