import React from 'react'
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import Views from "./Views"

import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
// import Footer from './components/footer/Footer';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <BrowserRouter>
          <Header />
          <Views />    
        </BrowserRouter>       
      </main>
      {/* <Footer /> */}
    </ThemeProvider>


  );
}

export default App;
