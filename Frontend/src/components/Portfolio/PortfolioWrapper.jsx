import styled from "styled-components";

const PortfolioWrapper = styled.div`
  .app__portfolio {
    display: flex;
    padding: 11.5625rem 0rem 5rem;
    flex-direction: column;
    text-align: center;
    position: relative;
    z-index: 1;
    width: 100%;
  }
  .background__left {
    position: absolute;
    top: 150px;
    left: 50px;
  }
  .background__bottom {
    position: absolute;
    bottom: 60px;
    right: 10px;
    z-index: -1;
  }
  .portfolio__header {
    padding: 0 7.6rem;
    width: min(100%, 1560px);
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .portfolio__images {
    padding: 0 7.6rem;
    width: min(100%, 1560px);
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .portfolio__header p {
    width: 70%;
  }

  .portfolio__images > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .header > ul {
    display: flex;
    align-items: center;
    gap: 3.125rem;
    padding: 4.875rem 0 3.5rem;
  }
  .active {
    color: var(--button-primary);
  }
  /* .header > ul > li:nth-child(1) {
                    color: var(--button-primary);
                  } */
  .header > ul > li {
    cursor: pointer;
  }
  .images {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
    margin: auto;
    padding-bottom: 3.5rem;
    place-items: center;
  }

  .images > div {
    cursor: pointer;
    transform: scale(1) translateZ(0);
    position: relative;
    border-raduis: 12px;
  }
  .images > div > img {
    width: 100%;
    object-fit: cover;
    height: 100%;
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
  .app__flex {
    display: flex;
    justify-content: space-around;
    align-items: center;
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
  /* .images > div:hover {
                    box-shadow: 0 0 25px rgba(208, 208, 208, 0.758);
                  } */

  /* ***** Syling the portfolio version mobile ***** */

  @media (max-width: 1478.4px) {
    .app__portfolio {
      padding: 14rem 9.6rem 5rem;
    }
    .portfolio__header {
      padding: 0;
    }
    .portfolio__images {
      padding: 0;
    }
  }

  @media (max-width: 1232px) {
    .app__portfolio {
      padding: 5rem 2.5rem;
    }
    .portfolio__header {
      padding: 0;
    }
    .portfolio__images {
      padding: 0;
    }
  }
  @media (max-width: 1040px) {
    .app__portfolio {
      display: flex;
      padding: 8rem 20px;
      width: 100%;
    }
    .portfolio__header {
      padding: 0;
    }
    .portfolio__images {
      padding: 0 20px;
      width: 100%;
    }
    .portfolio__header p {
      width: 100%;
    }
    .header > ul {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      flex-wrap: wrap;
    }
    .images {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
    .background__left {
      position: absolute;
      top: -20px;
      left: 30px;
    }
    .background__bottom {
      position: absolute;
      bottom: -10px;
      right: -200px;
      z-index: -1;
    }
  }

  @media screen and (max-width: 769px) {
    .images {
      display: flex;
      flex-direction: column;
    }
  }
`;

export default PortfolioWrapper;
