import React from "react";

export default function Spinner() {
  return (
    <div className='spinner'>
      <div className='app__spinner'>
        <div className='loader'></div>
        <p>Loading. Just a sec...</p>
      </div>
    </div>
  );
}
