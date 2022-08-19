import React, { useState, useEffect } from "react";
import skillsImage from "../../assets/skills.jpg";
import { client, urlFor } from "../../client";
import Spinner from "../../container/Spinner/Spinner";
import SkillsWrapper from "./SkillsWrapper";
function Skills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = '*[_type == "skills"]';
    client.fetch(query).then(async (res) => {
      setLoading(true);
      await setSkills(res);
      setLoading(false);
    });
  }, []);
  return (
    <SkillsWrapper>
      {loading && <Spinner />}
      {!loading && (
        <div className='app__skills' id='skills'>
          <div className='skills__left'>
            <span className='span__header'> Design is Life </span>
            <h3 className='h3__header'>
              I Develop Skills Regularly to Keep Me Update
            </h3>
            <p>
              Most common methods for designing websites that work well on
              desktop is responsive and adaptive design
            </p>

            <div className='skills_img'>
              {skills.map((item) => (
                <div>
                  <div className='skills__icon'>
                    <img
                      class='lazyload'
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
            <img class='lazyload' src={skillsImage} alt='skills photo' />
          </div>
        </div>
      )}
    </SkillsWrapper>
  );
}

export default Skills;
