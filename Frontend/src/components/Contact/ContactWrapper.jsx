import styled from "styled-components";
const ContactWrapper = styled.div`
  .app__contact {
    padding: 5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
  }

  .contact__header {
    width: min(100%, 1560px);
    margin-inline: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: 0rem 7.6rem;
  }
  .contact__header p {
    width: 60%;
  }
  .contact__address {
    width: min(100%, 1560px);
    padding: 6rem 7.6rem;
    margin-inline: auto;
    display: flex;
    justify-content: space-between;
  }
  .contact__left,
  .contact__right {
    flex-basis: 50%;
  }
  .contact__left {
    display: flex;
    flex-direction: column;
    gap: 0.9375rem;
  }

  .contact__left h3 {
    font-size: 1.875em;
    line-height: 39px;
    margin-bottom: 0.3125em;
  }

  .left__address,
  .left__email,
  .left__phone {
    display: flex;
    gap: 1.5625rem;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
  }
  .email__icon,
  .address__icon,
  .phone__icon {
    width: 88px;
    height: 88px;
    border-radius: 100%;
    position: relative;
  }
  .address__icon {
    background-color: var(--background-address);
  }
  .contact__left i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 24px;
  }
  .address__icon i {
    color: var(--color-address);
  }
  .email__icon {
    background-color: var(--background-email);
    color: var(--color-email);
  }
  .phone__icon {
    background-color: var(--background-phone);
    color: var(--color-phone);
  }

  .contact__right {
    visibility: visible;
    animation-duration: 1s;
    animation-name: fadeInRight;
  }
  .contact__right > div {
    display: flex;
    gap: 12px;
    margin-bottom: 12px;
  }
  .images__left,
  .images__right {
    position: absolute;
    z-index: 2;
  }
  .images__left {
    top: 100px;
    left: 0;
  }
  .images__right {
    position: absolute;
    bottom: 80px;
  }
  input {
    border: 0;
    border: 1px solid rgba(214, 219, 229, 0.36);
    width: 100%;
    height: 58px;
    padding: 0 30px;
    background-color: transparent;
    border-radius: 12px;
    color: #6f6b80;
    font-size: 18px;
    padding: 0 30px;
  }
  textarea {
    width: 100%;
    height: 200px;
    padding: 16px 30px 30px !important;
    background-color: transparent;
    border-radius: 12px;
    color: #b9b5c9;
    border: 1px solid rgba(214, 219, 229, 0.36);
    font-size: 18px;
  }
  /* **** Styling the contact Section for the version mobile *** */

  @media (max-width: 1478.4px) {
    .contact__header {
      padding: 0rem 9.6rem;
    }

    .contact__address {
      padding: 6rem 9.6rem;
    }
  }

  @media (max-width: 1232px) {
    .contact__header {
      padding: 0rem 2.5rem;
    }

    .contact__address {
      padding: 6rem 2.5rem;
    }
  }

  @media (max-width: 1040px) {
    .contact__header {
      width: min(100%, 1560px);
      margin-inline: auto;
      display: flex;
      align-items: center;
      flex-direction: column;
      text-align: center;
      padding: 7rem 20px 0;
      width: 100%;
    }

    .contact__left h3 {
      font-size: 25px;
      line-height: 33px;
      margin-bottom: 0.3125em;
    }
    .contact__left span {
      font-size: 16px;
      line-height: 30px;
    }
    .contact__address {
      width: min(100%, 1560px);
      padding: 6rem 18px;
      margin-inline: auto;
      display: flex;
      flex-direction: column;
      gap: 3rem;
      justify-content: space-between;
    }
    .contact__header p {
      width: 100%;
    }

    .images__left {
      top: -20px;
      left: 0;
    }
    .images__right {
      position: absolute;
      bottom: 80px;
      right: 0;
    }
    input {
      font-size: 16px;
    }
    textarea {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 768px) {
    .contact__right > div {
      display: flex;
      flex-direction: column;
    }
  }
  /* **** Styling the footer Section **** */

  .app__footer {
    background-color: var(--background-footer);
    padding: 0 7.6rem;
    width: 100%;
  }
  .footer__content {
    width: min(100%, 1560px);
    margin-inline: auto;
    display: flex;
    padding: 3.5625rem 0 3.8125rem;
    justify-content: space-between;
  }
  .footer__content ul {
    display: flex;
    gap: 2.625rem;
  }

  /* Styling the footer for the version mobile */

  @media (max-width: 1040px) {
    .app__footer {
      background-color: var(--background-footer);
      padding: 0 20px;
      width: 100%;
    }

    .footer__content {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default ContactWrapper;
