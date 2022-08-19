import React from "react";
import service5 from "../../assets/service5.png";
import servic6 from "../../assets/service6.png";
import ServiceWrapper from "./ServiceWrapper";

function Service() {
  return (
    <ServiceWrapper>
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
              <h3>FRONTEND APPS</h3>
              <span>
                Starts from <span className='price'>$99 </span>
              </span>
              <p>
                Build client-side applications with modern features like SPA and
                maintain semantic coding style among other best practices for
                SEO optimisation. Use modern tech such as Nuxt (Vue.js),
                TailwindCSS, and GSAP.
              </p>
            </div>
          </div>
          <div>
            <div className='list__right'>
              <h3>BACKEND APPS</h3>
              <span>
                Starts from <span className='price'> $199 </span>
              </span>
              Build scalable and maintainable server applications using modern
              technology stacks such as Node.js, Express, and MongoDB
            </div>
          </div>
          <div>
            <div className='list__right'>
              <h3>NATIVE APPS</h3>
              <span>
                Starts from <span className='price'>$299</span>
              </span>
              Use Flutter for building simple native mobile applications.
              Flutter is modern, fast, cross-platform, and popular.
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
          <img class='lazyload' src={service5} alt='photo Service' />
        </div>
        <div className='service__image__right'>
          <img class='lazyload' src={servic6} alt='photo Service' />
        </div>
      </div>
    </ServiceWrapper>
  );
}

export default Service;
