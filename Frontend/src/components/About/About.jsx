import React, { useEffect, useState } from "react";
import { client, urlFor } from "../../client";
import about1 from "../../assets/about1.png";
import about2 from "../../assets/about2.png";
import brush from "../../assets/brush.svg";
import energy from "../../assets/energy.svg";
import target from "../../assets/target.svg";
import process1 from "../../assets/process1.png";
import process2 from "../../assets/process2.png";
import process3 from "../../assets/process3.png";

import { motion } from "framer-motion";
import Spinner from "../../container/Spinner/Spinner";
import AboutWrapper from "./AboutWrapper";

function About() {
  const [About, setAbout] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const query = '*[_type == "about"]';
    client.fetch(query).then(async (res) => {
      setLoading(true);
      await setAbout(res);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading && <Spinner />}
      {!loading && (
        <AboutWrapper>
          <div className='app__detaills'>
            <motion.div animate={{ y: 0 }} className='detaill_target'>
              <div className='detaills__image'>
                <img class='lazyload' src={process1} alt='' />
                <img class='lazyload' src={target} alt='Target' />
              </div>
              <h3>Pixel Perfect code</h3>
              <p>
                Most common methods for designing websites that work well on
                desktop is responsive and adaptive design.
              </p>
            </motion.div>
            <div className='detaill__brush'>
              <div className='detaills__image'>
                <img class='lazyload' src={process2} alt='' />
                <img class='lazyload' src={brush} alt='Brush' />
              </div>
              <h3>High Quality</h3>
              <p>
                Most common methods for designing websites that work well on
                desktop is responsive and adaptive design.
              </p>
            </div>
            <div className='detaill__energy'>
              <div className='detaills__image'>
                <img class='lazyload' src={process3} alt='' />
                <img class='lazyload' src={energy} alt='Energy' />
              </div>
              <h3>Awesome Idea</h3>
              <p>
                Most common methods for designing websites that work well on
                desktop is responsive and adaptive design.
              </p>
            </div>
          </div>
          <div className='app__about' id='about'>
            {About.map((item) => (
              <div className='about'>
                <div className='about__left'>
                  {/* Image 18 Years of Success 9 Total Projects */}
                  <img class='lazyload' src={urlFor(item.image)} alt='About' />
                  <div className='about__years'>
                    <span className='years'> 18</span>
                    <span className='project'>
                      years of <br />
                      success
                    </span>
                  </div>
                  <div className='about__project'>
                    <span className='totale__project'> 52</span>
                    <span className='project'>
                      Total <br />
                      Projects
                    </span>
                  </div>
                </div>
                <div className='about__right'>
                  <span className='span__header'>{item.jobtitle}</span>
                  <h3 className='h3__about'>{item.title}</h3>
                  <div className='right__detaills'>
                    <p className='p__header'>{item.description}</p>
                  </div>
                  <div className='button'>
                    {" "}
                    <a href='#contact'> Hire me</a>
                  </div>
                </div>
                <div className='about__images'>
                  <div className='image__about__left'>
                    <img class='lazyload' src={about1} alt='About Image' />
                  </div>
                  <div className='images__about__right'>
                    <img class='lazyload' src={about2} alt='About Image' />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AboutWrapper>
      )}
    </>
  );
}

export default About;
