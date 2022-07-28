import React, { useState, useEffect } from "react";
import portfolio6 from "../../assets/portfolio6.jpg";
import portfolio1 from "../../assets/portfolio1.png";
import portfolio2 from "../../assets/portfolio2.png";
import { client, urlFor } from "../../client";
import { motion } from "framer-motion";

function Portfolio() {
  const [portfolio, setPortfolio] = useState([]);
  useEffect(() => {
    const query = '*[_type == "portfolios"]';
    client.fetch(query).then(async (res) => {
      await setPortfolio(res);
    });
  }, []);

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
            <li>All</li>
            <li>Youtube</li>
            <li>Vimeo</li>
            <li>Soundcloud</li>
            <li>Popup</li>
            <li>Detail</li>
          </ul>
        </div>
        <motion.div
          whileHover={{ scale: [1, 0.9] }}
          transition={{ duration: 0.25 }}
          className='images'>
          <div>
            <img loading='lazy' src={portfolio6} alt='image of potfolio' />
          </div>
          <div className='item2'>
            <img loading='lazy' src={portfolio6} alt='image of potfolio' />
          </div>
          <div>
            <img loading='lazy' src={portfolio6} alt='image of potfolio' />
          </div>
          <div>
            <img loading='lazy' src={portfolio6} alt='image of potfolio' />
          </div>
          <div>
            <img loading='lazy' src={portfolio6} alt='image of potfolio' />
          </div>
          <div>
            <img loading='lazy' src={portfolio6} alt='image of potfolio' />
          </div>
        </motion.div>
        <div className='button'>load More</div>
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
