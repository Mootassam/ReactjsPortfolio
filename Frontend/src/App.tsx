import React, { useEffect, useState } from "react";
import "lazysizes";
import {
  Header,
  About,
  Portfolio,
  Skills,
  Service,
  Contact,
} from "./components";
import Spinner from "./container/Spinner/Spinner";
import { client, urlFor } from "src/client";
function App() {
  const [header, setHeader] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const query = '*[_type == "header"]';
    client.fetch(query).then(async (res) => {
      setLoading(true);
      await setHeader(res);
      setLoading(false);
    });
  }, []);
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
