import React from "react";
import SpinnerWrapper from "./SpinnerWrapper";

export default function Spinner() {
  return (
    <SpinnerWrapper>
      <div className='spinner'>
        <div className='app__spinner'>
          <div className='loader'></div>
          <p>Loading. Just a sec...</p>
        </div>
      </div>
    </SpinnerWrapper>
  );
}
