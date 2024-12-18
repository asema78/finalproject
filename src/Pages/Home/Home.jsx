// Home.js
import React, { useEffect } from "react";
import "../Home/Home.css";
import ittech from "../../Imgs/ittech.png"
import Bridge from "../../Imgs/bridge.png";
import foor from "../../Imgs/logo.png";




import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <section class="om">
       <div className="conteiner">
        <div className="content" data-aos="fade-up-right">
           <div className="quite">
           The bridge to the future is built with the bricks of today’s efforts
           </div>
          <div className="h1">A bridge is more than a physical structure connecting two points; it is a symbol of progress, unity, and hope. The phrase “Bridge to the Future” represents the journey from where we are today to where we aspire to be tomorrow. It is a call to action to build, innovate, and grow together for a brighter future.</div>
        </div>
        <div className="content"data-aos="fade-up-left">
          <div className="img_content">
            <img src={ittech} alt="" />
          </div>
        </div>
       </div>
      
      </section>
    </>
  );
};

export default Home;
