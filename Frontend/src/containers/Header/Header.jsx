import React, { useEffect} from "react";
import "./Header.scss";
import { images } from "../../constants";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Home } from "../../containers";


// this is statement
const Header = () => {
  // const didAnimate = useRef(false);
  useEffect(() => {
    // Initialize ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // ScrollTrigger configuration
    ScrollTrigger.defaults({
      toggleActions: "play none none reverse",
    });

    // if (didAnimate.current) { return; }
    // // otherwise, record that we're running it now and continue...
    // didAnimate.current = true;

    gsap.to(".img-container", {
      scale: 52,
      ease: "ease",
      scrollTrigger: {
        trigger: ".video-section",
        scrub: 1,
        start: "top top",
        end: "bottom",
        pin: true,
      },
    });
    //
    gsap.to(".right", {
      autoAlpha: 0,
      x: 500,
      duration: 1.5,
      scrollTrigger: {
        start: 1,
      },
    });
    //
    gsap.to(".left", {
      autoAlpha: 0,
      x: -500,
      duration: 1.5,
      scrollTrigger: {
        start: 1,
      },
    });
    //
    gsap.to(".txt-bottom", {
      autoAlpha: 0,
      letterSpacing: -9,
      duration: 1,
      scrollTrigger: {
        start: 1,
      },
    });
    //
    const tl = gsap.timeline();
    tl.from(".left-side div", {
      y: 150,
      opacity: 0,
      stagger: {
        amount: 0.4,
      },
      delay: 0.5,
    })
      .from(
        ".right-side",
        {
          opacity: 0,
          duration: 2,
        },
        0.5
      )
      .to(".wrapper", { x: -window.innerWidth });

    ScrollTrigger.create({
      animation: tl,
      trigger: ".wrapper",
      start: "top top",
      end: "+=600",
      scrub: 1,
      pin: true,
      ease: "ease",
    });

    gsap.utils.toArray(".col").forEach((images) => {
      gsap.fromTo(
        images,
        {
          opacity: 0.3,
          x: 0,
        },
        {
          opacity: 1,
          x: -50,
          scrollTrigger: {
            trigger: images,
            start: "10%",
            stagger: {
              amount: 4,
            },
          },
        }
      );
    });

    const timeline = gsap.timeline();

    timeline
      .from(".title span", {
        y: 150,
        skewY: 7,
        duration: 3,
      })
      .from(".txt-bottom", {
        letterSpacing: -10,
        opacity: 0,
        duration: 2,
      });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    };
  }, []);

  return (
    <>
      <div className="bbody">
        <div className="wrapper">
          <section className="video-section">
            <div className="video-container">
              <video src={images.bkcvideo} autoPlay loop muted />
            </div>
            <div className="img-container">
              <img src={images.window} alt="" />
            </div>
            <div className="text-content">
              <div className="img_txt">
                <div className="title sm left">
                  <span>Creating </span>
                </div>
                <div className="title bg left lol">
                  <span>Reality</span>
                </div>
                <div className="title bg right n">
                  <span>From </span>
                </div>
                <div className="title bg right">
                  <span>Dreams</span>
                </div>
              </div>
              <span className="txt-bottom  changesspan">
                When design meets code,innvoation thrives
              </span>
            </div>
            <div className="v_container">
              <div className="left-side">
                <div className="tv">
                  {/* Discover by scrolling. */}
                  <div className="bg upperText">Discover</div>
                  <div className="sm direction-by">By</div>
                  <div className="direction-of-scrolling">
                    <div className="bg bottom">Scrolling</div>
                  </div>
                </div>
                <div className="text-container">
                  <p>
                    I am looking for an entry-level career as a Developer at a
                    highly competitive sector that values my analytical and
                    technical abilities and allows me to expand my knowledge and
                    I want to work for a company that will allow me to
                    contribute to its success while also allowing me to grow
                    personally.
                  </p>
                </div>
              </div>
              <div className="right-side">
                <p>Explore Me</p>
              </div>
            </div>
          </section>
          <section className="section">
            <div className="boxes-container">
              <Home />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Header;
