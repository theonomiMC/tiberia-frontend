import React from 'react'
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import Views from "./Views"

import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <BrowserRouter>
          <Header />
          <Views />
        </BrowserRouter>
      </main>
    </ThemeProvider>


  );
}

export default App;
