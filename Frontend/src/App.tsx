import React from "react";
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
    <div className='app'>
      <Header />
      <div className='app__content'>
        <About /> <Portfolio /> <Skills /> <Service /> <Contact />
      </div>
    </div>
  );
}

export default App;
