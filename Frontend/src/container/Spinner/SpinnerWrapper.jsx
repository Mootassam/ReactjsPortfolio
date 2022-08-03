import styled from "styled-components";

const SpinnerWrapper = styled.div`
  .spinner {
    position: relative;

    box-shadow: 0px 5px 10px 80px #1c1c1c;
    -webkit-box-shadow: 0px 5px 10px #1c1c1c;
    -moz-box-shadow: 0px 5px 10px #1c1c1c;
    width: 100%;
    height: 100vh;
  }
  .app__spinner {
    position: fixed;
    display: grid;
    place-items: center;
    gap: 14px;
    top: calc(50% - 40px);
    left: calc(50% - 40px);
    z-index: 500;
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
