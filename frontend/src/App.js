import React from "react";
import './App.css';
import Header from "./components/Header";
import {Fragment} from "react";
import Footer from "./components/Footer";
import TranslationTable from "./components/TranslationTable";

function App() {
  return (
      <Fragment>
          <div className={"wrapper"}>
              <Header/>

          </div>
          <TranslationTable/>
          <Footer/>
      </Fragment>

  );
}

export default App;
