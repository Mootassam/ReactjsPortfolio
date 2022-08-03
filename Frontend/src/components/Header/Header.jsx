/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from "react";
import { client, urlFor } from "../../client";
import Spinner from "../../container/Spinner/Spinner";
import HeaderWrapper from "./HeaderWrapper";
function Header() {
  const showCurrent = () => {};
  const showMenue = () => {};
  const hideMenue = () => {};
  const [header, setHeader] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const query = '*[_type == "header"]';
    client.fetch(query).then(async (res) => {
      setLoading(true);
      await setHeader(res);
      setLoading(false);
    });
  }, []);

  const links__ul = document.querySelectorAll(".menue");
  const activeLink = (e) => {
    for (let i = 0; i < links__ul.length; i++) {
      links__ul[i].className = links__ul[i].className.replace("current", "");
    }
    e.currentTarget.className += " current";
  };

  return (
    <HeaderWrapper>
      {loading && <Spinner />}
      {!loading && (
        <div className='app__header' id='home'>
          <header>
            <div className='header__menue'>
              <div className='content'>
                <div className='header__logo'>
                  <img
                    loading='lazy'
                    src={
                      "https://marketifythemes.net/html/dizme/img/logo/dark.png"
                    }
                    alt=''
                  />
                </div>
                <div className='header__links' id='links'>
                  <ul id='links__ul'>
                    <li>
                      <a
                        href='#home'
                        className='menue current'
                        onClick={activeLink}>
                        Home
                      </a>
                    </li>
                    <li>
                      <a href='#about' className='menue' onClick={activeLink}>
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href='#portfolio'
                        className='menue'
                        onClick={activeLink}>
                        Portfolio
                      </a>
                    </li>
                    <li>
                      <a href='#skills' className='menue' onClick={activeLink}>
                        Skills
                      </a>
                    </li>
                    <li>
                      <a href='#service' className='menue' onClick={activeLink}>
                        Service
                      </a>
                    </li>
                    <li>
                      <a href='#contact' className='menue' onClick={activeLink}>
                        Contact
                      </a>
                    </li>
                    <li>
                      <a href='/Resume.pdf' download>
                        Download CV
                      </a>
                    </li>
                  </ul>
                  <div className='close'>
                    <i
                      className='fa-solid fa-circle-xmark'
                      onClick={hideMenue}
                    />
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
                        A <span className='span__content'>Web developer</span>{" "}
                        From
                        <span className='span__place'> Tunis </span>
                      </p>
                      <div className='text'>{item.description}</div>
                      <div className='left__buttons'>
                        <div className='button'>
                          {" "}
                          <a href='#about'> About Me </a>
                        </div>
                        <div className='social__media' />
                      </div>
                    </div>
                    <div className='content__right'>
                      <img
                        loading='lazy'
                        src={urlFor(item.avatar)}
                        alt=' avatar'
                      />
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
      )}
    </HeaderWrapper>
  );
}

export default Header;
