import React, { useState, useEffect } from "react";
import portfolio1 from "../../assets/portfolio1.png";
import portfolio2 from "../../assets/portfolio2.png";
import { client, urlFor } from "../../client";
import { motion } from "framer-motion";

function Portfolio() {
  const [images, setImage] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "portfolio"]';
    client.fetch(query).then((res) => {
      setImage(res);
      setFilterWork(res);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if (item === "All") {
        setFilterWork(images);
      } else {
        setFilterWork(images.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  console.log(images);

  return (
    <div className='app__portfolio' id='portfolio'>
      <div className='portfolio__header'>
        <span className='span__header'> Portfolio</span>
        <h3 className='h3__header'>My Amazing Works</h3>
        <p className='p__header'>
          Most common methods for designing websites that work well on desktop
          is responsive and adaptive design
        </p>
      </div>
      <div className='portfolio__images'>
        <div className='header'>
          <ul>
            {["UI/UX", "Web App", "Mobile App", "React JS", "All"].map(
              (item) => (
                <li
                  onClick={() => handleWorkFilter(item)}
                  className={`${activeFilter === item ? "active" : ""}`}>
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className='images'>
          {filterWork.map((item, index) => (
            <div key={index}>
              <img
                loading='lazy'
                src={urlFor(item.imgUrl)}
                alt='image of potfolio'
              />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className='app__work-hover app__flex'>
                <div>
                  <h3>{item.title}</h3>
                  <p style={{ color: "#FFFFFF" }}>{item.description}</p>
                </div>
                <div className='work__Link'>
                  <a href={item.projectLink} target='_blank' rel='noreferrer'>
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className='app__flex'>
                      <i className='fa-solid fa-eye'></i>
                    </motion.div>
                  </a>
                  <a href={item.codeLink} target='_blank' rel='noreferrer'>
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className='app__flex'>
                      <i className='fa-brands fa-github'></i>
                    </motion.div>
                  </a>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
        {/* <div className='button'>load More</div> */}
      </div>
      <div className='background__left'>
        <img loading='lazy' src={portfolio1} alt='photo background image' />
      </div>
      <div className='background__bottom'>
        <img loading='lazy' src={portfolio2} alt='photo background image' />
      </div>
    </div>
  );
}

export default Portfolio;
