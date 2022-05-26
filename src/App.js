import React from "react";
import { StylesProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'
import GlobalStyle from "./commons/styles/global-style"
import Main from './containers/Main'
import Footer from "./containers/Footer";



function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <GlobalStyle />
      <Main />
      <Footer />
    </StylesProvider>


  );
}

export default App;
