import styled from "styled-components";

const SpinnerWrapper = styled.div`
  .spinner {
    position: fixed;
    box-shadow: 0px 5px 10px 80px #1c1c1c;
    -webkit-box-shadow: 0px 5px 10px #1c1c1c;
    -moz-box-shadow: 0px 5px 10px #1c1c1c;
    background-color: rgb(28, 28, 28, 0.8);
    width: 100%;
    height: 100vh;
    z-index: 100;
    display: grid;
    place-items: center;
  }
  .app__spinner {
    display: grid;
    place-items: center;
    gap: 14px;
    top: calc(50% - 40px);
    left: calc(50% - 40px);
    width: 100%;
  }

  .loader {
    border: 2px solid #f3f3f3;
    border-top: 2px solid var(--button-primary);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default SpinnerWrapper;
