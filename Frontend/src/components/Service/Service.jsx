import React from "react";
import service5 from "../../assets/service5.png";
import servic6 from "../../assets/service6.png";

function Service() {
  return (
    <div className='app__service' id='service'>
      <div className='service__header'>
        <span className='span__header'> Services</span>
        <h3 className='h3__header'>What I Do for Clients</h3>
        <p className='p__header'>
          Most common methods for designing websites that work well on desktop
          is responsive and adaptive design
        </p>
      </div>
      <div className='service_list'>
        <div>
          <div className='list__right'>
            <h3>Creative Design</h3>
            <span>
              Starts from <span className='price'>$99 </span>
            </span>
            <p>
              Web design refers to the design of websites that are displayed on
              the internet. It usually refers to the user experience aspects of
              website development.
            </p>
          </div>
        </div>
        <div>
          <div className='list__right'>
            <h3>Graphic Design</h3>
            <span>
              Starts from <span className='price'> $199 </span>{" "}
            </span>
            Web design refers to the design of websites that are displayed on
            the internet. It usually refers to the user experience aspects of
            website development Web Design.
          </div>
        </div>
        <div>
          <div className='list__right'>
            <h3>UI/UX Design</h3>
            <span>
              Starts from <span className='price'>$299</span>
            </span>{" "}
            Web design refers to the design of websites that are displayed on
            the internet. It usually refers to the user experience aspects of
            website development.
          </div>
        </div>
        <div>
          <div className='list__right'>
            <h3>Web Design</h3>
            <span>
              Starts from <span className='price'> $399</span>
            </span>{" "}
            Web design refers to the design of websites that are displayed on
            the internet. It usually refers to the user experience aspects of
            website development.
          </div>
        </div>
      </div>
      <div className='service__image__left'>
        <img loading='lazy' src={service5} alt='photo Service' />
      </div>
      <div className='service__image__right'>
        <img loading='lazy' src={servic6} alt='photo Service' />
      </div>
    </div>
  );
}

export default Service;
