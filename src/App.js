import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import Views from "./Views"
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import ScrollTop from './components/scroll/ScrollTop';

function App() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, [])
  const mainRef = useRef(null)
  return (
    <ThemeProvider theme={theme}>
      <main ref={mainRef}>
        <BrowserRouter>
          <Header />
          <Views />
        </BrowserRouter>
        {show && <ScrollTop mainRef={mainRef} />}
      </main>
      {/* <Footer /> */}
    </ThemeProvider>


  );
}

export default App;
