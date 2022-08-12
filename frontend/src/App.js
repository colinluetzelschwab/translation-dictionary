import React from "react";
import './App.css';
import Header from "./components/Header";
import {Fragment} from "react";
import Footer from "./components/Footer";
import TranslationWrapper from "./components/TranslationWrapper";

function App() {
  return (
      <Fragment>
          <div className={"wrapper"}>
              <Header/>
              <TranslationWrapper/>
          </div>
          <Footer/>
      </Fragment>

  );
}

export default App;
