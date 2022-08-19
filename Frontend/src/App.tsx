import React from "react";
import "lazysizes";
import {
  Header,
  About,
  Portfolio,
  Skills,
  Service,
  Contact,
} from "./components";

function App() {
  return (
    <React.Fragment>
      <div className='app'>
        <Header />
        <div className='app__content'>
          <About />
          <Portfolio />
          <Skills />
          <Service />
          <Contact />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
