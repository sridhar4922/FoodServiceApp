import React, { useEffect } from 'react';
import Home from "./routes/Home"
import Contact from "./routes/Contact"
import Service from "./routes/Service"
import About from "./routes/About"
import {Route , Routes} from "react-router-dom";


function App() {
  useEffect(() => {
    document.title = 'BalaHomeFoods';

    return () => {
      document.title = 'Default Title';
    };
  }, []);


  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Service" element={<Service />} />
      <Route path="/Contact" element={<Contact />} />

    </Routes>
    </>
  );
}

export default App;
