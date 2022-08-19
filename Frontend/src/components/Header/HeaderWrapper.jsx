import styled from "styled-components";
import Background from "../../assets/background_header.jpg";
const HeaderWrapper = styled.div`
  .app__header {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    // background-image: url(${Background});
    background-color: #414455;
  }

  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    padding: 25px 0;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
    box-shadow: 0 0 10px rgb(255 255 255 / 5%);
    backdrop-filter: blur(5px);
  }
  .header__menue {
    max-width: 1400px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    height: auto;
    padding: 0 40px;
    position: relative;
    clear: both;
  }
  .content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .header__logo {
    cursor: pointer;
    align-self: center;
    z-index: 4;
  }

  .header__logo > img {
    max-width: 150px;
    max-height: 80px;
    vertical-align: middle;
  }
  .header__links {
    display: flex;
    position: sticky;
  }
  .header__links ul {
    display: flex;
    gap: 3rem;
    align-items: center;
  }

  .header__links > ul > li:nth-last-child(1) {
    padding: 8px 35px 7px;
    width: max-content;
    color: var(--white-title);
    font-weight: 500;
    cursor: pointer;
    border-radius: 50px;
    overflow: hidden;
    outline: 2px solid var(--button-primary);
    position: relative;
    z-index: 1;
  }

  .header__links > ul > li:nth-last-child(1)::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transform: scaleY(0);
    background-color: var(--button-primary);
    transition: transform 200ms ease-in;
    transform-origin: top;
    z-index: -1;
  }

  .header__links > ul > li:nth-last-child(1):hover:after {
    transform: scaleY(1);
    transform-origin: bottom;
  }
  .current {
    color: var(--button-primary);
  }

  .mobile__nav {
    display: none;
    cursor: pointer;
    position: relative;
    z-index: 3;
  }
  .header__mobile {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    margin: auto;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    justify-content: center;
    transition: all 1.3s ease;
    background-color: var(--background-color);
    width: 100%;
    height: 100vh;
  }

  .h3__sm {
    font-size: 45px;
    line-height: 59px;
    color: var(--secondary-orange);
  }
  .h3__lg {
    font-size: 85px;
    line-height: 111px;
  }
  .p__content,
  .span__content,
  .span__place {
    font-size: 28px;
    line-height: 30px;
    font-weight: 500;
  }
  .text {
    color: var(--white-title);
    font-size: 23px;
    line-height: 35px;
  }
  .content__right > img {
    max-height: 650px;
  }

  /* **** Styling the header Content ***** */

  .header__content {
    width: 100%;
    height: auto;
    clear: both;
    float: left;
  }
  .detaills__container {
    width: 100%;
    height: 100vh;
    clear: both;
    float: left;
    position: relative;
    margin-bottom: 190px;
  }
  .container {
    max-width: 1400px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    height: 100%;
    padding: 0 40px;
    position: relative;
    clear: both;
  }
  .content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .content__left {
    width: 50%;
    padding-right: 20px;
  }

  .content__left p > span:nth-child(1) {
    color: var(--primary--green);
  }

  .content__left p > span:nth-child(2) {
    color: var(--secondary--yellow);
  }
  .text {
    padding: 0 0 2rem 0;
  }
  .content__right {
    position: relative;
    width: 50%;
    padding-left: 100px;
  }

  .p__content {
    color: var(--white-title);
    padding: 1.3rem 0 2rem;
    font-weight: 500;
  }
  .span__content {
    color: var(--primary--green);
  }
  .span__place {
    color: var(--secondary--yellow);
  }

  .reactjs,
  .redux,
  .scss {
    width: 75px;
    height: 75px;
    display: inline-block;
    border-radius: 8px;
    position: absolute;
    z-index: 1;
  }

  .reactjs {
    background-color: rgb(33, 33, 33);
    top: 40px;
    left: 75px;
    animation: reactjs 5s infinite linear;
  }
  .reactjs > img {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 50px;
    height: 50px;
    transform: translate(-50%, -50%);
  }
  /*Animation reactjs*/
  @keyframes reactjs {
    0% {
      top: 40px;
    }

    50% {
      top: 60px;
    }
    0% {
      top: 40px;
    }
  }

  .redux {
    background-color: rgb(29, 29, 29);
    right: 60px;
    top: 100px;
    animation: redux 5s linear infinite;
  }
  .redux > img {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 50px;
    height: 50px;
    transform: translate(-50%, -50%);
  }
  @keyframes redux {
    0% {
      top: 100px;
    }

    50% {
      top: 130px;
    }
    0% {
      top: 100px;
    }
  }
  .scss {
    bottom: 50px;
    right: 330px;
    background-color: var(--figma);
    animation: figma 5s infinite linear alternate;
  }
  .scss > img {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 50px;
    height: 50px;
    transform: translate(-50%, -50%);
  }

  @keyframes figma {
    0% {
      bottom: 50px;
    }

    50% {
      bottom: 30px;
    }
    0% {
      bottom: 50px;
    }
  }
  .close {
    cursor: pointer;
    display: none;
  }
  /* **** Styling the header Menue For version Mobile **** */

  @media (max-width: 1680px) {
    .header__links {
      display: flex;
    }
    .header__logo {
      align-self: center;
    }
    .header__logo > img {
      max-width: 150px;
      max-height: 80px;

      vertical-align: middle;
    }
    .header__links ul {
      gap: 3rem;
    }
  }

  @media (max-width: 1600px) {
    body {
      font-size: 16px;
    }
    .h3__sm {
      font-size: 25px;
      line-height: 33px;
      color: var(--secondary-orange);
    }
    .h3__lg {
      font-size: 60px;
      line-height: 78px;
    }
    .p__content,
    .span__content,
    .span__place {
      font-size: 19px;
      line-height: 30px;
      font-weight: 500;
      color: var(--white-title);
    }
    .text {
      color: var(--white-title);
      font-size: 16px;
      line-height: 24px;
      max-width: 90%;
    }
    .content__right > img {
      max-height: 400px;
    }
    .header__menue {
      max-width: 1170px;
    }
    .container {
      max-width: 1170px;
    }
  }
  @media (max-width: 1478.4px) {
    body {
      font-size: 16px;
    }
    .header__links ul {
      gap: 1.875rem;
    }
    .header__links > ul > li:nth-last-child(1) {
      padding: 5px 25.2px 5px;
    }

    .header__links {
      display: flex;
    }
    .header__logo > img {
      max-width: 110px;
      height: auto;
      vertical-align: middle;
    }

    .reactjs,
    .redux,
    .scss {
      width: 50px;
      height: 50px;
      display: inline-block;
      border-radius: 8px;
      position: absolute;
      z-index: 1;
    }

    .reactjs {
      background-color: rgb(33, 33, 33);
      top: 40px;
      left: 75px;
      animation: reactjs 3s infinite linear;
    }
    .reactjs > img {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 30px;
      height: 30px;
      transform: translate(-50%, -50%);
    }

    /*Animation reactjs*/

    .redux {
      background-color: rgb(29, 29, 29);
      right: 110px;
      top: 100px;
      animation: redux 3s linear infinite alternate;
    }
    .redux > img {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 30px;
      height: 30px;
      transform: translate(-50%, -50%);
    }

    .scss {
      bottom: 10px;
      right: 300px;
      background-color: var(--figma);
      animation: figma 3s infinite linear alternate;
    }
    .scss > img {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 30px;
      height: 30px;
      transform: translate(-50%, -50%);
    }

    @keyframes figma {
      0% {
        bottom: 10px;
      }

      50% {
        bottom: 20px;
      }
      0% {
        bottom: 10px;
      }
    }
  }

  @media (max-width: 1040px) {
    header {
      padding: 10px 20px;
    }
    .close {
      display: block;
    }
    .header__links > ul > li:nth-last-child(1) {
      padding: 5px 25px;
    }

    .header__menue {
      display: flex;
    }
    .header__links {
      display: none;
      position: absolute;
      margin: auto;
      z-index: 2;
      top: 75px;
      justify-content: center;
      align-items: center;
      align-content: center;
      transition: all 1.3s ease;
      background-color: var(--background-color);
      width: calc(100% - 9%);
      height: 400px;
      z-index: 3;
      border-radius: 50px;
      box-shadow: 0 60px 140px 160px rgb(0 0 0 / 40%);
    }
    .header__links ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }

    .fa-circle-xmark {
      position: absolute;
      top: 18px;
      right: 18px;
      font-size: 30px;
      z-index: 3;
      color: var(--white-title);
    }

    .mobile__nav {
      display: block;
    }
    .mobile__nav i {
      font-size: 25px;
      color: var(--white-title);
    }
    .header__logo img {
      max-width: 220px;
      max-height: 220px;
    }
    .header__content {
      flex-direction: column;
    }

    .header__logo > img {
      width: 90px;
      max-height: 70px;
      height: auto;
      vertical-align: middle;
    }
    .reactjs,
    .redux,
    .scss {
      display: none;
    }
    .header__menue {
      padding: 0 18px;
    }
    .container {
      padding: 0 20px;
    }
    .header__content {
      flex-direction: column;
    }
    .content {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
    .content__left,
    .contact__right {
      text-align: center;
    }
    .content__left {
      margin-top: 30px;
      width: 100%;
      padding-right: 0;
      text-align: center;
      order: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .content__right {
      order: 1;
      width: auto;
      padding: 0;
    }

    .content__right > img {
      max-width: 300px;
      max-height: 300px;
      margin: 0;
    }
    .h3__sm {
      font-size: 25px;
      line-height: 33px;
      color: var(--secondary-orange);
    }
    .h3__lg {
      font-size: 55px;
      line-height: 72px;
    }
    .p__content,
    .span__content,
    .span__place {
      font-size: 23px;
      line-height: 30px;
      font-weight: 500;
    }
    .p__content {
      padding: 11px 0 23px;
    }
    .text {
      color: var(--white-title);
      font-size: 20px;
      line-height: 30px;
      max-width: 90%;
    }
  }

  @media (max-width: 768px) {
    .h3__sm {
      font-size: 21px;
      line-height: 27px;
      color: var(--secondary-orange);
    }

    .h3__lg {
      font-size: 42px;
      line-height: 55px;
    }
    .p__content,
    .span__content,
    .span__place {
      font-size: 18px;
      line-height: 30px;
      font-weight: 500;
    }

    .p__content {
      padding: 11px 0 15px;
    }
    .text {
      color: var(--white-title);
      font-size: 16px;
      line-height: 24px;
    }
    .content__right > img {
      max-width: 220px;
      max-height: 220px;
    }
  }
`;
export default HeaderWrapper;
