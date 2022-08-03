import styled from "styled-components";

const SkillsWrapper = styled.div`
  .app__skills {
    display: flex;
    padding: 5rem 7.6rem;
    align-items: flex-start;
    width: min(100%, 1560px);
    margin-inline: auto;
    justify-content: space-between;
  }
  .skills__left h3 {
    width: 90%;
  }
  .skills__left p {
    line-height: 30px;
  }
  .skills__left,
  .skills__right {
    flex-basis: 50%;
  }
  .skills__left {
    margin-top: 7rem;
    padding-right: 50px;
  }
  .skills__right {
    padding-left: 100px;
  }
  .skills__right > img {
    max-height: 800px;
  }

  .skills_img {
    padding-top: 3.5rem;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    align-items: center;
    justify-items: flex-start;
  }
  .skills_img > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .skills__icon {
    display: flex;
    flex-direction: column;
    background-color: var(--background-footer);
    border-radius: 50%;
    height: 90px;
    width: 90px;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .skills_img img {
    object-fit: cover;
    height: 50%;
    width: 50%;
  }

  .app__work-hover {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 0.5rem;
    opacity: 0;
    transition: all 0.3s ease;
  }

  .work__Link {
    display: flex;
  }
  .work__Link div {
    position: relative;

    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    margin: 1rem;
    font-family: var(--font-base);
    font-weight: 800;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .fa-brands,
  .fa-solid {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 30px;
  }

  /* Styling the service section for the mobile verions  */

  @media (max-width: 1478.4px) {
    .app__skills {
      padding: 1.3rem 9.6rem;
    }

    .skills_img {
      padding-top: 2.5rem;
      gap: 1rem;
    }
    .skills__icon {
      height: 70px;
      width: 70px;
    }
  }

  @media (max-width: 1232px) {
    .app__skills {
      padding: 5rem 2.5rem;
    }
  }
  @media (max-width: 1040px) {
    .app__skills {
      display: flex;
      padding: 5rem 20px;
      align-items: center;
      flex-direction: column-reverse;
      justify-content: center;
    }
    .skills__left,
    .skills__right {
      flex-basis: auto;
    }
    .skills__left {
      margin-top: 7rem;
      padding: 0;
      align-items: center;
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: center;
    }
    .skills_img {
      width: 100%;
      justify-content: center;
    }
    .skills__right img {
      max-height: 600px;
    }
    .skills__right {
      padding-left: 0px;
    }
  }
`;
export default SkillsWrapper;
