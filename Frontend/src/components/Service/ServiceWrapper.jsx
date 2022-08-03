import styled from "styled-components";
const ServiceWrapper = styled.div`
  .app__service {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    text-align: center;
    margin-inline: auto;
    margin-inline: auto;
    position: relative;
    width: 100%;
    padding: 0 0 10rem;
    overflow-x: hidden;
  }
  .service__image__left {
    position: absolute;
    top: 200px;
    left: 0;
    z-index: 1;
  }
  .service__image__left img {
    max-width: 460px;
  }
  .service__image__right {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 0;
  }

  .service__header {
    width: min(100%, 1560px);
    padding: 5rem 7.6rem;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .service__header > p {
    width: 50%;
  }
  .service_list {
    width: min(100%, 1560px);
    padding: 0rem 7.6rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
    position: relative;
    z-index: 2;
  }
  .service_list > div {
    background-color: var(--background-service);
    padding: 2rem;
    border-radius: 12px;
    display: flex;
  }
  .list__left {
    display: flex;
    align-items: center;
    justify-content: center;
    background-repeat: no-repeat;
    position: relative;
  }
  .list__left img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }

  .list__right {
    display: flex;
    flex-direction: column;
    text-align: start;
  }
  .list__right > h3 {
    font-size: 25px;
  }
  .list__right span {
    color: var(--white-title);
    font-size: 18px;
    padding-bottom: 19px;
  }
  .price {
    font-size: 20px;
    color: #f75023 !important;
  }
  /* ***** Styling the section service for the mobile **** */

  @media (max-width: 1478.4px) {
    .service__header {
      padding: 5rem 9.6rem;
    }
    .service_list {
      padding: 0rem 9.6rem;
    }
  }

  @media (max-width: 1232px) {
    .service__header {
      padding: 5rem 2.5rem;
    }
    .service_list {
      padding: 0rem 2.5rem;
    }
  }

  @media (max-width: 1040px) {
    .app__service {
      padding: 0 0 3rem;
    }
    .service__header {
      width: min(100%, 1560px);
      padding: 5rem 18px;
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    .service__header > p {
      width: 100%;
    }
    .service_list {
      width: min(100%, 1560px);
      padding: 0rem 18px;
      grid-template-columns: none;
      grid-template-rows: repeat((4, 1fr));
    }
    .service__image__right {
      display: none;
    }
  }
`;

export default ServiceWrapper;
