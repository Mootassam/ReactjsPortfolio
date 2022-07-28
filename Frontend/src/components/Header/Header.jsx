import React, { useEffect, useState } from "react";
import { client, urlFor } from "../../client";
function Header() {
  const showCurrent = () => {};
  const showMenue = () => {};
  const hideMenue = () => {};
  const [header, setHeader] = useState([]);
  useEffect(() => {
    const query = '*[_type == "header"]';
    client.fetch(query).then(async (res) => {
      await setHeader(res);
    });
  }, []);

  return (
    <div className='app__header' id='home'>
      <header>
        <div className='header__menue'>
          <div className='content'>
            <div className='header__logo'>
              <img
                loading='lazy'
                src={"https://marketifythemes.net/html/dizme/img/logo/dark.png"}
                alt=''
              />
            </div>
            <div className='header__links' id='links'>
              <ul id='links__ul'>
                <li>
                  <a
                    href='#home'
                    className='menue current'
                    onClick={showCurrent}>
                    Home
                  </a>
                </li>
                <li>
                  <a href='#about ' className='menue' onClick={showCurrent}>
                    About
                  </a>
                </li>
                <li>
                  <a href='#portfolio' className='menue' onClick={showCurrent}>
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href='#skills' className='menue' onClick={showCurrent}>
                    Skills
                  </a>
                </li>
                <li>
                  <a href='#service' className='menue' onClick={showCurrent}>
                    Service
                  </a>
                </li>
                <li>
                  <a href='#contact' className='menue' onClick={showCurrent}>
                    Contact
                  </a>
                </li>
                <li>
                  <a href='./documents/Resume.pdf' download=''>
                    Download CV
                  </a>
                </li>
              </ul>
              <div className='close'>
                <i className='fa-solid fa-circle-xmark' onClick={hideMenue} />
              </div>
            </div>
          </div>
          <div className='mobile__nav'>
            <i
              className='fa-solid fa-bars'
              onClick={showMenue}
              id='#hamburger'
            />
          </div>
        </div>
      </header>
      <div className='header__content'>
        <div className='detaills__container'>
          {header.map((item, index) => (
            <div className='container' key={index + 0}>
              <div className='content'>
                <div className='content__left'>
                  <h3 className='h3__sm'>Hello, I'm</h3>
                  <h3 className='h3__lg'>{item.name}</h3>
                  <p className='p__content'>
                    A <span className='span__content'> Creative Designer</span>
                    From
                    <span className='span__place'> New York</span>
                  </p>
                  <div className='text'>{item.description}</div>
                  <div className='left__buttons'>
                    <div className='button'>About Me</div>
                    <div className='social__media' />
                  </div>
                </div>
                <div className='content__right'>
                  <img loading='lazy' src={urlFor(item.avatar)} alt=' avatar' />
                  <div className='reactjs'>
                    <img
                      loading='lazy'
                      src={urlFor(item.skills1)}
                      alt='photo reactjs'
                    />
                  </div>
                  <div className='redux'>
                    <img
                      loading='lazy'
                      src={urlFor(item.skills2)}
                      alt='photo redux'
                    />
                  </div>
                  <div className='scss'>
                    <img
                      loading='lazy'
                      src={urlFor(item.skills3)}
                      alt='photo redux'
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
