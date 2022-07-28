import React, { useState, useEffect } from "react";
import skillsImage from "../../assets/skills.jpg";
import { client, urlFor } from "../../client";
function Skills() {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const query = '*[_type == "skills"]';
    client.fetch(query).then(async (res) => {
      await setSkills(res);
    });
  }, []);
  return (
    <div className='app__skills' id='skills'>
      <div className='skills__left'>
        <span className='span__header'> Design is Life </span>
        <h3 className='h3__header'>
          I Develop Skills Regularly to Keep Me Update
        </h3>
        <p>
          Most common methods for designing websites that work well on desktop
          is responsive and adaptive design
        </p>

        <div className='skills_img'>
          {skills.map((item) => (
            <div>
              <div className='skills__icon'>
                <img
                  loading='lazy'
                  src={urlFor(item.icon)}
                  alt='photo of skills'
                />
              </div>

              <div className='skills__text'>
                <p className='p__text'>{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='skills__right'>
        <img loading='lazy' src={skillsImage} alt='skills photo' />
      </div>
    </div>
  );
}

export default Skills;
